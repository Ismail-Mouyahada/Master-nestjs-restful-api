export class Commande {
    readonly utilisateurId: number;
    readonly produits: {
      produitId: number;
      quantite: number;
    }[];
}
