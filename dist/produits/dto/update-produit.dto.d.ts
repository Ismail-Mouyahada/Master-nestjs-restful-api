import { CreateProduitDto } from './create-produit.dto';
declare const UpdateProduitDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProduitDto>>;
export declare class UpdateProduitDto extends UpdateProduitDto_base {
    image?: string;
    nom: string;
    description: string;
    prix: number;
}
export {};
