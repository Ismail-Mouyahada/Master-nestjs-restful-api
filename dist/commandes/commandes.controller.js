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
exports.CommandesController = void 0;
const common_1 = require("@nestjs/common");
const commandes_service_1 = require("./commandes.service");
const create_commande_dto_1 = require("./dto/create-commande.dto");
const jwt_auth_guard_1 = require("../auth/middlwares/jwt-auth.guard");
const roles_guard_1 = require("../auth/middlwares/roles.guard");
const roles_decorator_1 = require("../auth/roles/roles.decorator");
let CommandesController = class CommandesController {
    constructor(commandesService) {
        this.commandesService = commandesService;
    }
    async create(createCommandeDto) {
        return this.commandesService.create(createCommandeDto);
    }
    async findAll() {
        return this.commandesService.findAll();
    }
    async findOne(id) {
        return this.commandesService.findOne(+id);
    }
    async update(id, updateCommandeDto) {
        return this.commandesService.update(+id, updateCommandeDto);
    }
    async remove(id) {
        return this.commandesService.remove(+id);
    }
};
exports.CommandesController = CommandesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire', 'client'),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_commande_dto_1.CreateCommandeDto]),
    __metadata("design:returntype", Promise)
], CommandesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire'),
    (0, common_1.Get)("liste"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommandesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommandesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_commande_dto_1.CreateCommandeDto]),
    __metadata("design:returntype", Promise)
], CommandesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'gestionnaire'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommandesController.prototype, "remove", null);
exports.CommandesController = CommandesController = __decorate([
    (0, common_1.Controller)('api/v1/commandes'),
    __metadata("design:paramtypes", [commandes_service_1.CommandesService])
], CommandesController);
//# sourceMappingURL=commandes.controller.js.map