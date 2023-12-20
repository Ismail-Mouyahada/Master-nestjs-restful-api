import { CreateProduitDto } from './create-produit.dto';
declare const UpdateProduitDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProduitDto>>;
export declare class UpdateProduitDto extends UpdateProduitDto_base {
    readonly nom: string;
    readonly description: string;
    readonly prix: number;
}
export {};
