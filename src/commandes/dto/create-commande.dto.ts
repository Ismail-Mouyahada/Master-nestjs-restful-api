// create-commande.dto.ts

import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ProduitDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantite: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  produitId: number;
}

export class CreateCommandeDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  utilisateurId: number;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProduitDto)
  @ApiProperty({ type: ProduitDto, isArray: true })
  produits: ProduitDto[];
}