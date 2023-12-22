import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import * as bcrypt from 'bcrypt';
import { ApiAcceptedResponse, ApiBody } from '@nestjs/swagger';
import { ConnexionDto } from './dto/connexion-auth.dto';
import { InscriptionDto } from './dto/Inscription-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UtilisateursService,
    private jwtService: JwtService,
  ) {}

  // Utilisez Swagger pour documenter l'API
  @ApiAcceptedResponse({ description: 'L\'utilisateur a été authentifié avec succès.' })
  @ApiBody({ type: ConnexionDto })
  async connexion(email: string, motDePasse: string) {
    try {
      console.log('Email:', email);
      console.log('Mot de Passe:', motDePasse);

      // Recherche de l'utilisateur par email
      const user = await this.usersService.findOneByEmail(email);

      // Vérification si l'utilisateur existe
      if (!user) {
        throw new UnauthorizedException('Utilisateur non trouvé');
      }

      // Vérification si le mot de passe est valide
      const isPasswordValid = await this.comparePasswords(motDePasse, user.motDePasse);

      if (!isPasswordValid) {
        throw new UnauthorizedException('Mot de passe incorrect');
      }

      // Génération du token d'accès
      const payload = { sub: user.id, email: user.email };
      const accessToken = await this.jwtService.signAsync(payload);

      // Génération du token de rafraîchissement
      const refreshToken = await this.generateRefreshToken(user.id.toString());

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.error(error); // Journalise l'erreur pour une investigation ultérieure

      // Utilisez une exception personnalisée pour l'authentification
      throw new UnauthorizedException('Erreur lors de l\'authentification');
    }
  }

  @ApiAcceptedResponse({ description: 'L\'utilisateur a été enregistré avec succès.' })
  @ApiBody({ type: InscriptionDto })
  async inscription(inscriptionDto: InscriptionDto) {
    try {
      // Check if the user already exists
      const existingUser = await this.usersService.findOneByEmail(inscriptionDto.email);

      if (existingUser) {
        // User already exists, return a meaningful response
        return {
          message: 'L\'utilisateur avec cet email existe déjà',
          statusCode: 409, // HTTP status code for conflict
        };
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(inscriptionDto.motDePasse, 10);

      // Register the user
      await this.usersService.create({
        nom: inscriptionDto.nom,
        prenom: inscriptionDto.prenom,
        email: inscriptionDto.email,
        motDePasse: hashedPassword,
      });

      return {
        message: 'Inscription réussie',
      };

    } catch (error) {
      console.error(error); // Log the error for further investigation
      throw new InternalServerErrorException('Erreur lors de l\'inscription');
    }
  }



  // Fonction privée pour comparer les mots de passe hachés
  private async comparePasswords(pass: string, hashedPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(pass, hashedPassword);
    } catch (error) {
      // Utilisez une exception personnalisée pour les erreurs de comparaison de mots de passe
      throw new UnauthorizedException('Identifiant ou mot de passe incorrect');
    }
  }

  // Fonction privée pour générer le token de rafraîchissement
  private async generateRefreshToken(userId: string): Promise<string> {
    try {
      // Implémentez ici la génération du token de rafraîchissement, par exemple, avec le JwtService
      // Assurez-vous de stocker et gérer ces tokens de rafraîchissement de manière sécurisée
      const refreshPayload = { sub: userId, type: 'refresh' };
      const refresh_token = await this.jwtService.signAsync(refreshPayload, { expiresIn: '7d' });
      return refresh_token;
    } catch (error) {
      // Utilisez une exception personnalisée pour les erreurs de génération du token de rafraîchissement
      throw new UnauthorizedException('Erreur lors de la génération du token de rafraîchissement');
    }
  }
}
