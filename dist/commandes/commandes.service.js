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
exports.CommandesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CommandesService = class CommandesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCommandeDto) {
        const { utilisateurId, produits } = createCommandeDto;
        const utilisateur = await this.prisma.prisma.utilisateur.findUnique({
            where: { id: utilisateurId },
        });
        if (!utilisateur) {
            throw new common_1.NotFoundException('Utilisateur non trouvé');
        }
        const produitsExistants = await this.prisma.prisma.produit.findMany({
            where: { id: { in: produits.map((p) => p.produitId) } },
        });
        if (produitsExistants.length !== produits.length) {
            throw new common_1.NotFoundException('Certains produits n\'existent pas');
        }
        const commande = await this.prisma.prisma.commande.create({
            data: {
                utilisateur: { connect: { id: utilisateurId } },
                produits: {
                    create: produits.map((p) => ({
                        produit: { connect: { id: p.produitId } },
                        quantite: p.quantite,
                    })),
                },
            },
        });
        return commande;
    }
    async findAll() {
        return this.prisma.prisma.commande.findMany({
            include: {
                utilisateur: true,
                produits: {
                    include: {
                        produit: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return this.prisma.prisma.commande.findUnique({
            where: { id },
            include: {
                utilisateur: true,
                produits: {
                    include: {
                        produit: true,
                    },
                },
            },
        });
    }
    async update(id, updateCommandeDto) {
        const { produits, utilisateurId } = updateCommandeDto;
        const existingCommande = await this.prisma.prisma.commande.findUnique({
            where: { id },
        });
        if (!existingCommande) {
            throw new common_1.NotFoundException('Commande non trouvée');
        }
        const utilisateur = await this.prisma.prisma.utilisateur.findUnique({
            where: { id: utilisateurId },
        });
        if (!utilisateur) {
            throw new common_1.NotFoundException('Utilisateur non trouvé');
        }
        const produitsExistants = await this.prisma.prisma.produit.findMany({
            where: { id: { in: produits.map(p => p.produitId) } },
        });
        if (produitsExistants.length !== produits.length) {
            throw new common_1.NotFoundException('Certains produits n\'existent pas');
        }
        const updatedCommande = await this.prisma.prisma.commande.update({
            where: { id },
            data: {
                utilisateur: { connect: { id: utilisateurId } },
                produits: {
                    upsert: produits.map(p => ({
                        where: { id: p.id },
                        create: { produit: { connect: { id: p.produitId } }, quantite: p.quantite },
                        update: { quantite: p.quantite },
                    })),
                },
            },
            include: {
                utilisateur: true,
                produits: {
                    include: {
                        produit: true,
                    },
                },
            },
        });
        return updatedCommande;
    }
    async remove(id) {
        const existingCommande = await this.prisma.prisma.commande.findUnique({
            where: { id },
        });
        if (!existingCommande) {
            throw new common_1.NotFoundException('Commande non trouvée');
        }
        return this.prisma.prisma.commande.delete({
            where: { id },
        });
    }
};
exports.CommandesService = CommandesService;
exports.CommandesService = CommandesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommandesService);
//# sourceMappingURL=commandes.service.js.map