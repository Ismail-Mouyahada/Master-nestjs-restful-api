import { CreateProduitDto } from 'src/produits/dto/create-produit.dto';
declare const UpdateCommandeDto_base: import("@nestjs/common").Type<Partial<CreateProduitDto>>;
export declare class UpdateCommandeDto extends UpdateCommandeDto_base {
    quantite: number;
    produitId: number;
}
export declare class CreateCommandeDto {
    utilisateurId: number;
    produits: CreateProduitDto[];
}
export {};
