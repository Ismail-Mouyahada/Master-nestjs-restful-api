import { CreateCommandeDto } from './create-commande.dto';
declare const UpdateCommandeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommandeDto>>;
export declare class UpdateCommandeDto extends UpdateCommandeDto_base {
    readonly utilisateurId: number;
    readonly produits: {
        [x: string]: any;
        produitId: number;
        quantite: number;
    }[];
}
export {};
