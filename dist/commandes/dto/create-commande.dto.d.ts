export declare class CreateCommandeDto {
    utilisateurId: number;
    produits: {
        [x: string]: number;
        produitId: number;
        quantite: number;
    }[];
}
