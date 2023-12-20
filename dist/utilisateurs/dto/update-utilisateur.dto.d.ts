import { CreateUtilisateurDto } from './create-utilisateur.dto';
declare const UpdateUtilisateurDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUtilisateurDto>>;
export declare class UpdateUtilisateurDto extends UpdateUtilisateurDto_base {
    readonly nom: string;
    readonly email: string;
    readonly motDePasse: string;
    readonly role?: string;
}
export {};
