import { IsOptional } from '@nestjs/class-validator';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUtilisateurDto {
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
 
