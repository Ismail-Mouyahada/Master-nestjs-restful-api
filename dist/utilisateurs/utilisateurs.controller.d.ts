import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
export declare class UtilisateursController {
    private readonly utilisateursService;
    constructor(utilisateursService: UtilisateursService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
    findAll(): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
    update(id: string, updateUtilisateurDto: UpdateUtilisateurDto): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
}
