"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateursModule = void 0;
const common_1 = require("@nestjs/common");
const utilisateurs_controller_1 = require("./utilisateurs.controller");
const utilisateurs_service_1 = require("./utilisateurs.service");
const prisma_module_1 = require("../prisma/prisma.module");
let UtilisateursModule = class UtilisateursModule {
};
exports.UtilisateursModule = UtilisateursModule;
exports.UtilisateursModule = UtilisateursModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [utilisateurs_controller_1.UtilisateursController],
        providers: [utilisateurs_service_1.UtilisateursService],
        exports: [utilisateurs_service_1.UtilisateursService],
    })
], UtilisateursModule);
//# sourceMappingURL=utilisateurs.module.js.map