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
exports.CreateUtilisateurDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_validator_2 = require("class-validator");
class CreateUtilisateurDto {
}
exports.CreateUtilisateurDto = CreateUtilisateurDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "prenom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_2.IsEmail)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    (0, class_validator_2.MinLength)(10),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "motDePasse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.IsString)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "role", void 0);
//# sourceMappingURL=create-utilisateur.dto.js.map