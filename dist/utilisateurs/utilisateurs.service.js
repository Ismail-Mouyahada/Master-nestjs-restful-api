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
exports.UtilisateursService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UtilisateursService = class UtilisateursService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUtilisateurDto) {
        try {
            if (!createUtilisateurDto.motDePasse) {
                throw new common_1.BadRequestException('Le champ "motDePasse" est requis');
            }
            const { motDePasse, ...utilisateurData } = createUtilisateurDto;
            const hashedmotDePasse = await this.hashPassword(motDePasse);
            const createdUtilisateur = await this.prisma.utilisateur.create({
                data: {
                    ...utilisateurData,
                    motDePasse: hashedmotDePasse,
                },
            });
            return createdUtilisateur;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('Error during user creation:', error);
            throw new common_1.InternalServerErrorException('Erreur interne du serveur lors de la création de l\'utilisateur');
        }
    }
    async findAll() {
        const allUtilisateurs = await this.prisma.utilisateur.findMany();
        return allUtilisateurs;
    }
    async findOne(id) {
        const utilisateur = await this.prisma.utilisateur.findUnique({
            where: { id },
        });
        return utilisateur;
    }
    async findOneByEmail(email) {
        const utilisateur = await this.prisma.utilisateur.findUnique({
            where: { email },
        });
        if (!utilisateur) {
            return false;
        }
        return utilisateur;
    }
    async findOneById(id) {
        const utilisateur = await this.prisma.utilisateur.findUnique({
            where: { id },
        });
        if (!utilisateur) {
            return false;
        }
        return utilisateur;
    }
    async update(id, updateUtilisateurDto) {
        const existingUtilisateur = await this.prisma.utilisateur.findUnique({
            where: { id },
        });
        if (!existingUtilisateur) {
            throw new common_1.NotFoundException('Utilisateur non trouvé');
        }
        const updatedUtilisateur = await this.prisma.utilisateur.update({
            where: { id },
            data: updateUtilisateurDto,
        });
        return updatedUtilisateur;
    }
    async remove(id) {
        const existingUtilisateur = await this.prisma.utilisateur.findUnique({
            where: { id },
        });
        if (!existingUtilisateur) {
            throw new common_1.NotFoundException('Utilisateur non trouvé');
        }
        const deletedUtilisateur = await this.prisma.utilisateur.delete({
            where: { id },
        });
        return deletedUtilisateur;
    }
    async hashPassword(password) {
        const saltRounds = 10;
        try {
            return bcrypt.hash(password, saltRounds);
        }
        catch (error) {
            throw new Error('Erreur lors du hachage du mot de passe');
        }
    }
};
exports.UtilisateursService = UtilisateursService;
exports.UtilisateursService = UtilisateursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UtilisateursService);
//# sourceMappingURL=utilisateurs.service.js.map