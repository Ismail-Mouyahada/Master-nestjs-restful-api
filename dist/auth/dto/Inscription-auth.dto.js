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
exports.InscriptionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class InscriptionDto {
}
exports.InscriptionDto = InscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'Le nom de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le nom est obligatoire' }),
    __metadata("design:type", String)
], InscriptionDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Le prénom de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le prénom est obligatoire' }),
    __metadata("design:type", String)
], InscriptionDto.prototype, "prenom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com', description: 'L\'adresse e-mail de l\'utilisateur' }),
    (0, class_validator_1.IsEmail)({}, { message: 'L\'adresse e-mail n\'est pas valide' }),
    __metadata("design:type", String)
], InscriptionDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MotDePasse123', description: 'Le mot de passe de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le mot de passe est obligatoire' }),
    (0, class_validator_1.MinLength)(10, { message: 'Le mot de passe doit avoir au moins 10 caractères' }),
    __metadata("design:type", String)
], InscriptionDto.prototype, "motDePasse", void 0);
//# sourceMappingURL=Inscription-auth.dto.js.map