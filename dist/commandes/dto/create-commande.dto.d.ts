declare class ProduitDto {
    quantite: number;
    produitId: number;
}
export declare class CreateCommandeDto {
    utilisateurId: number;
    produits: ProduitDto[];
}
export {};
