import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateur.dto';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {
    @IsString()
    @IsNotEmpty()
    readonly nom: string;
  
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    readonly motDePasse: string;
  
    @IsString()
    readonly role?: string;
}
