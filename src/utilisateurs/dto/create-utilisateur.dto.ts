import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUtilisateurDto {
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
