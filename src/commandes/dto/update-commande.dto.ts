import { PartialType } from '@nestjs/mapped-types';
import { CreateCommandeDto } from './create-commande.dto';

export class UpdateCommandeDto extends PartialType(CreateCommandeDto) {
    readonly utilisateurId: number;
    readonly produits: {
      [x: string]: any;
      produitId: number;
      quantite: number;
    }[];
}
