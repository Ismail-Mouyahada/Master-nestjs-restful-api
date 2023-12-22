"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        const data = JSON.stringify({
            repo_github: "https://github.com/Ismail-Mouyahada/TP-master-nestjs.git",
            postman: "https://galactic-astronaut-742693.postman.co/workspace/My-Workspace~1bf427ab-3a84-424f-8a72-421aad6139d0/collection/17558142-a0ff04f5-b39d-4e20-897e-54046f06788a?action=share&creator=17558142",
            swagger: "https://api-e-comemrce.onrender.com/api"
        });
        return data;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map