import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProduitDto } from 'src/produits/dto/create-produit.dto';

export class UpdateCommandeDto extends PartialType(CreateProduitDto) {
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
  @Type(() => CreateProduitDto)
  @ApiProperty({ type: CreateProduitDto, isArray: true })
  produits: CreateProduitDto[];
}

