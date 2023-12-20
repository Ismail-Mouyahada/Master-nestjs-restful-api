// commandes.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Injectable()
export class CommandesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCommandeDto: CreateCommandeDto) {
    const { utilisateurId, produits } = createCommandeDto;

    const utilisateur = await this.prisma.prisma.utilisateur.findUnique({
      where: { id: utilisateurId },
    });
    if (!utilisateur) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    const produitsExistants = await this.prisma.prisma.produit.findMany({
      where: { id: { in: produits.map((p: { produitId: any; }) => p.produitId) } },
    });
    if (produitsExistants.length !== produits.length) {
      throw new NotFoundException('Certains produits n\'existent pas');
    }

    const commande = await this.prisma.prisma.commande.create({
      data: {
        utilisateur: { connect: { id: utilisateurId } },
        produits: {
          create: produits.map((p: { produitId: any; quantite: any; }) => ({
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

  async findOne(id: number) {
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

  async update(id: number, updateCommandeDto: UpdateCommandeDto) {
    const { produits, utilisateurId } = updateCommandeDto;

    // Vérifier si la commande existe
    const existingCommande = await this.prisma.prisma.commande.findUnique({
      where: { id },
    });

    if (!existingCommande) {
      throw new NotFoundException('Commande non trouvée');
    }

    // Vérifier si l'utilisateur existe
    const utilisateur = await this.prisma.prisma.utilisateur.findUnique({
      where: { id: utilisateurId },
    });

    if (!utilisateur) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    // Vérifier si les produits existent
    const produitsExistants = await this.prisma.prisma.produit.findMany({
      where: { id: { in: produits.map(p => p.produitId) } },
    });

    if (produitsExistants.length !== produits.length) {
      throw new NotFoundException('Certains produits n\'existent pas');
    }

    // Mettre à jour la commande
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

  async remove(id: number) {
    // Vérifier si la commande existe
    const existingCommande = await this.prisma.prisma.commande.findUnique({
      where: { id },
    });

    if (!existingCommande) {
      throw new NotFoundException('Commande non trouvée');
    }

    // Supprimer la commande
    return this.prisma.prisma.commande.delete({
      where: { id },
    });
  }
}
