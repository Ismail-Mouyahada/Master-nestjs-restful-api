"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const utilisateurs_service_1 = require("../utilisateurs/utilisateurs.service");
const bcrypt = require("bcrypt");
const swagger_1 = require("@nestjs/swagger");
const connexion_auth_dto_1 = require("./dto/connexion-auth.dto");
const Inscription_auth_dto_1 = require("./dto/Inscription-auth.dto");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async connexion(email, motDePasse) {
        try {
            console.log('Email:', email);
            console.log('Mot de Passe:', motDePasse);
            const user = await this.usersService.findOneByEmail(email);
            if (!user) {
                throw new common_1.UnauthorizedException('Utilisateur non trouvé');
            }
            const isPasswordValid = await this.comparePasswords(motDePasse, user.motDePasse);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Mot de passe incorrect');
            }
            const payload = { sub: user.id, email: user.email };
            const accessToken = await this.jwtService.signAsync(payload);
            const refreshToken = await this.generateRefreshToken(user.id.toString());
            return {
                accessToken,
                refreshToken,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.UnauthorizedException('Erreur lors de l\'authentification');
        }
    }
    async inscription(inscriptionDto) {
        try {
            const existingUser = await this.usersService.findOneByEmail(inscriptionDto.email);
            if (existingUser) {
                return {
                    message: 'L\'utilisateur avec cet email existe déjà',
                    statusCode: 409,
                };
            }
            const hashedPassword = await bcrypt.hash(inscriptionDto.motDePasse, 10);
            await this.usersService.create({
                nom: inscriptionDto.nom,
                prenom: inscriptionDto.prenom,
                email: inscriptionDto.email,
                motDePasse: hashedPassword,
            });
            return {
                message: 'Inscription réussie',
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Erreur lors de l\'inscription');
        }
    }
    async comparePasswords(pass, hashedPassword) {
        try {
            return await bcrypt.compare(pass, hashedPassword);
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Identifiant ou mot de passe incorrect');
        }
    }
    async generateRefreshToken(userId) {
        try {
            const refreshPayload = { sub: userId, type: 'refresh' };
            const refresh_token = await this.jwtService.signAsync(refreshPayload, { expiresIn: '7d' });
            return refresh_token;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Erreur lors de la génération du token de rafraîchissement');
        }
    }
};
exports.AuthService = AuthService;
__decorate([
    (0, swagger_1.ApiAcceptedResponse)({ description: 'L\'utilisateur a été authentifié avec succès.' }),
    (0, swagger_1.ApiBody)({ type: connexion_auth_dto_1.ConnexionDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "connexion", null);
__decorate([
    (0, swagger_1.ApiAcceptedResponse)({ description: 'L\'utilisateur a été enregistré avec succès.' }),
    (0, swagger_1.ApiBody)({ type: Inscription_auth_dto_1.InscriptionDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Inscription_auth_dto_1.InscriptionDto]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "inscription", null);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [utilisateurs_service_1.UtilisateursService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map