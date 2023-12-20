import { IsNotEmpty, IsNumber, IsArray, ArrayNotEmpty, ArrayMinSize, Min } from 'class-validator';

export class CreateCommandeDto {
    @IsNotEmpty()
    @IsNumber()
    utilisateurId: number;
  
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    produits: {
      [x: string]: number;
      produitId: number;
      quantite: number;
    }[];
}
