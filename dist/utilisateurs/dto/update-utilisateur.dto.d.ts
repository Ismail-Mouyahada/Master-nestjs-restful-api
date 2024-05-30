import { CreateUtilisateurDto } from './create-utilisateur.dto';
declare const UpdateUtilisateurDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUtilisateurDto>>;
export declare class UpdateUtilisateurDto extends UpdateUtilisateurDto_base {
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
    role?: string;
}
export {};
