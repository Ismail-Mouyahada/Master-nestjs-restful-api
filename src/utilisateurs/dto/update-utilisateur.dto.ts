import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateur.dto';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nom: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    prenom: string;
  
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    motDePasse: string;
  
    @ApiProperty()
    @IsOptional()
    @IsString()
    @ApiHideProperty()
    role?: string;
    
 
}
