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
exports.ProduitsController = void 0;
const common_1 = require("@nestjs/common");
const produits_service_1 = require("./produits.service");
const create_produit_dto_1 = require("./dto/create-produit.dto");
const update_produit_dto_1 = require("./dto/update-produit.dto");
const roles_decorator_1 = require("../auth/roles/roles.decorator");
const roles_guard_1 = require("../auth/middlwares/roles.guard");
const jwt_auth_guard_1 = require("../auth/middlwares/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ProduitsController = class ProduitsController {
    constructor(produitsService) {
        this.produitsService = produitsService;
    }
    async create(createProduitDto) {
        return this.produitsService.create(createProduitDto);
    }
    async findAll() {
        return this.produitsService.findAll();
    }
    async findOne(id) {
        return this.produitsService.findOne(+id);
    }
    async update(id, updateProduitDto) {
        return this.produitsService.update(+id, updateProduitDto);
    }
    async remove(id) {
        return this.produitsService.remove(+id);
    }
};
exports.ProduitsController = ProduitsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produit_dto_1.CreateProduitDto]),
    __metadata("design:returntype", Promise)
], ProduitsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('liste'),
    (0, swagger_1.ApiOkResponse)({ description: 'Retourne la liste de tous les produits' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProduitsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Retourne un produit en fonction de l\'ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du produit', type: 'string' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProduitsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_produit_dto_1.UpdateProduitDto]),
    __metadata("design:returntype", Promise)
], ProduitsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProduitsController.prototype, "remove", null);
exports.ProduitsController = ProduitsController = __decorate([
    (0, common_1.Controller)('api/v1/produits'),
    __metadata("design:paramtypes", [produits_service_1.ProduitsService])
], ProduitsController);
//# sourceMappingURL=produits.controller.js.map