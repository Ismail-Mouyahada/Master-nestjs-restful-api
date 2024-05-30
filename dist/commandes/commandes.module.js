"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandesModule = void 0;
const common_1 = require("@nestjs/common");
const commandes_service_1 = require("./commandes.service");
const commandes_controller_1 = require("./commandes.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let CommandesModule = class CommandesModule {
};
exports.CommandesModule = CommandesModule;
exports.CommandesModule = CommandesModule = __decorate([
    (0, common_1.Module)({
        controllers: [commandes_controller_1.CommandesController],
        providers: [commandes_service_1.CommandesService, prisma_service_1.PrismaService],
    })
], CommandesModule);
//# sourceMappingURL=commandes.module.js.map