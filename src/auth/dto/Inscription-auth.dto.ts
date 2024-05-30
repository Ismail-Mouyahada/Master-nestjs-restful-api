import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class InscriptionDto {
  @ApiProperty({ example: 'John', description: 'Le nom de l\'utilisateur' })
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  nom: string;

  @ApiProperty({ example: 'Doe', description: 'Le prénom de l\'utilisateur' })
  @IsNotEmpty({ message: 'Le prénom est obligatoire' })
  prenom: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'L\'adresse e-mail de l\'utilisateur' })
  @IsEmail({}, { message: 'L\'adresse e-mail n\'est pas valide' })
  email: string;

  @ApiProperty({ example: 'MotDePasse123', description: 'Le mot de passe de l\'utilisateur' })
  @IsNotEmpty({ message: 'Le mot de passe est obligatoire' })
  @MinLength(10, { message: 'Le mot de passe doit avoir au moins 10 caractères' })
  motDePasse: string;
}
