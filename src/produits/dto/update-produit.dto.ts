import { PartialType } from '@nestjs/mapped-types';
import { CreateProduitDto } from './create-produit.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProduitDto extends PartialType(CreateProduitDto) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    image?: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nom: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @ApiProperty()
    @IsNumber()
    prix: number;
}
