// commandes.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Injectable()
export class CommandesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCommandeDto: CreateCommandeDto) {
    const { utilisateurId, produits } = createCommandeDto;

    // Check if the user exists
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { id: utilisateurId },
    });
    if (!utilisateur) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    // Check if all specified products exist
    const produitsExistants = await this.prisma.produit.findMany({
      where: {
        id: { in: produits.map((p) => p.produitId) },
      },
    });
 
    if (produitsExistants.length === 0) {
      throw new NotFoundException("Certains produits n'existent pas");
    }

    // Create the command with associated user and products
    const commande = await this.prisma.commande.create({
      data: {
        utilisateur: { connect: { id: utilisateurId } },
        produits: {
          create: produits.map((p) => ({
            produit: { connect: { id: p.produitId } },
            quantite: p.quantite,
          })),
        },
      },
      include: {
        produits: {
          include: {
            produit: true,
          },
        },
      },
    });

    return commande;
  }


  async findAll() {
    return this.prisma.commande.findMany({
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
    const existingCommande = await this.prisma.commande.findUnique({
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

    if (!existingCommande) {
      throw new NotFoundException('Commande non trouvée');
    }

    return existingCommande;
  }


  async update(id: number, updateCommandeDto: CreateCommandeDto) {
    const { produits, utilisateurId } = updateCommandeDto;

    // Check if the command exists
    const existingCommande = await this.prisma.commande.findUnique({
      where: { id },
      include: {
        produits: {
          include: {
            produit: true,
          },
        },
      },
    });

    if (!existingCommande) {
      throw new NotFoundException('Commande non trouvée');
    }

    // Check if the user exists
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { id: utilisateurId },
    });

    if (!utilisateur) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    // Check if all specified products exist
    const produitsExistants = await this.prisma.produit.findMany({
      where: { id: { in: produits.map((p) => p.produitId) } },
    });

    if (produitsExistants.length !== produits.length) {
      throw new NotFoundException("Certains produits n'existent pas");
    }

    // Update the command
    const updatedCommande = await this.prisma.commande.update({
      where: { id },
      data: {
        utilisateur: { connect: { id: utilisateurId } },
        produits: {
          upsert: produits.map((p) => ({
            where: { id: p.produitId },
            create: {
              produit: { connect: { id: p.produitId } },
              quantite: p.quantite,
            },
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
    const existingCommande = await this.prisma.commande.findUnique({
      where: { id },
    });

    if (!existingCommande) {
      throw new NotFoundException('Commande non trouvée');
    }

    const deletedCommande = await this.prisma.commande.delete({
      where: { id },
    });

    return deletedCommande;
  }
}
