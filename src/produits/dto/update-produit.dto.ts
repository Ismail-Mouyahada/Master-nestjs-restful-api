import { PartialType } from '@nestjs/mapped-types';
import { CreateProduitDto } from './create-produit.dto';

export class UpdateProduitDto extends PartialType(CreateProduitDto) {
    readonly nom: string;
    readonly description: string;
    readonly prix: number;
}
