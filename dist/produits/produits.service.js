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
exports.ProduitsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProduitsService = class ProduitsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProduitDto) {
        const createdProduit = await this.prisma.produit.create({
            data: createProduitDto,
        });
        return createdProduit;
    }
    async findAll() {
        const allProduits = await this.prisma.produit.findMany();
        return allProduits;
    }
    async findOne(id) {
        const produit = await this.prisma.produit.findUnique({
            where: { id },
        });
        if (!produit) {
            throw new common_1.NotFoundException('Produit non trouvé');
        }
        return produit;
    }
    async update(id, updateProduitDto) {
        const updatedProduit = await this.prisma.produit.update({
            where: { id },
            data: updateProduitDto,
        });
        return updatedProduit;
    }
    async remove(id) {
        const deletedProduit = await this.prisma.produit.delete({
            where: { id },
        });
        return deletedProduit;
    }
};
exports.ProduitsService = ProduitsService;
exports.ProduitsService = ProduitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProduitsService);
//# sourceMappingURL=produits.service.js.map