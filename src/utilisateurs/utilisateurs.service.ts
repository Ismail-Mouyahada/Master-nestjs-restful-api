import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilisateursService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUtilisateurDto) {
    try {
      // Ensure 'motDePasse' is present in the DTO
      if (!createUtilisateurDto.motDePasse) {
        throw new BadRequestException('Le champ "motDePasse" est requis');
      }

      // Extract password from DTO
      const { motDePasse, ...utilisateurData } = createUtilisateurDto;

      // Hash the password
      const hashedmotDePasse = await this.hashPassword(motDePasse);

      // Save the user with the hashed password
      const createdUtilisateur = await this.prisma.prisma.utilisateur.create({
        data: {
          ...utilisateurData,
          motDePasse: hashedmotDePasse,
        },
      });

      return createdUtilisateur;
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        // Rethrow known exceptions with custom messages
        throw error;
      }

      // Log the unexpected error
      console.error('Error during user creation:', error);

      // Throw a generic internal server error
      throw new InternalServerErrorException('Erreur interne du serveur lors de la création de l\'utilisateur');
    }
  }

  async findAll() {
    const allUtilisateurs = await this.prisma.prisma.utilisateur.findMany();
    return allUtilisateurs;
  }

  async findOne(id: number) {
    const utilisateur = await this.prisma.prisma.utilisateur.findUnique({
      where: { id },
    });

    return utilisateur;
  }

  async update(id: number, updateUtilisateurDto) {
    // Vérifier si l'utilisateur existe
    const existingUtilisateur = await this.prisma.prisma.utilisateur.findUnique({
      where: { id },
    });

    if (!existingUtilisateur) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    // Mettre à jour l'utilisateur
    const updatedUtilisateur = await this.prisma.prisma.utilisateur.update({
      where: { id },
      data: updateUtilisateurDto,
    });

    return updatedUtilisateur;
  }

  async remove(id: number) {
    // Vérifier si l'utilisateur existe
    const existingUtilisateur = await this.prisma.prisma.utilisateur.findUnique({
      where: { id },
    });

    if (!existingUtilisateur) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    // Supprimer l'utilisateur
    const deletedUtilisateur = await this.prisma.prisma.utilisateur.delete({
      where: { id },
    });

    return deletedUtilisateur;
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;

    try {
      return bcrypt.hash(password, saltRounds);
    } catch (error) {
      // Handle hashing errors
      throw new Error('Erreur lors du hachage du mot de passe');
    }
  }
}
