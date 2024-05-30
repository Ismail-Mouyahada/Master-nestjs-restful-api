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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateursController = void 0;
const common_1 = require("@nestjs/common");
const utilisateurs_service_1 = require("./utilisateurs.service");
const create_utilisateur_dto_1 = require("./dto/create-utilisateur.dto");
const update_utilisateur_dto_1 = require("./dto/update-utilisateur.dto");
const jwt_auth_guard_1 = require("../auth/middlwares/jwt-auth.guard");
const roles_decorator_1 = require("../auth/roles/roles.decorator");
const roles_guard_1 = require("../auth/middlwares/roles.guard");
let UtilisateursController = class UtilisateursController {
    constructor(utilisateursService) {
        this.utilisateursService = utilisateursService;
    }
    create(createUtilisateurDto) {
        return this.utilisateursService.create(createUtilisateurDto);
    }
    findAll() {
        return this.utilisateursService.findAll();
    }
    findOne(id) {
        return this.utilisateursService.findOne(+id);
    }
    update(id, updateUtilisateurDto) {
        return this.utilisateursService.update(+id, updateUtilisateurDto);
    }
    remove(id) {
        return this.utilisateursService.remove(+id);
    }
};
exports.UtilisateursController = UtilisateursController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_utilisateur_dto_1.CreateUtilisateurDto]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('liste'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_utilisateur_dto_1.UpdateUtilisateurDto]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "remove", null);
exports.UtilisateursController = UtilisateursController = __decorate([
    (0, common_1.Controller)('api/v1/utilisateurs'),
    __metadata("design:paramtypes", [utilisateurs_service_1.UtilisateursService])
], UtilisateursController);
//# sourceMappingURL=utilisateurs.controller.js.map