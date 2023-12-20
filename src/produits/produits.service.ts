import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
 

@Injectable()
export class ProduitsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProduitDto) {
    // Assuming your Prisma model is called 'Produit'
    const createdProduit = await this.prisma.prisma.produit.create({
      data: createProduitDto,
    });

    return createdProduit;
  }

  async findAll() {
    const allProduits = await this.prisma.prisma.produit.findMany();
    return allProduits;
  }

  async findOne(id: number) {
    const produit = await this.prisma.prisma.produit.findUnique({
      where: { id },
    });

    return produit;
  }

  async update(id: number, updateProduitDto) {
    const updatedProduit = await this.prisma.prisma.produit.update({
      where: { id },
      data: updateProduitDto,
    });

    return updatedProduit;
  }

  async remove(id: number) {
    const deletedProduit = await this.prisma.prisma.produit.delete({
      where: { id },
    });

    return deletedProduit;
  }
}
