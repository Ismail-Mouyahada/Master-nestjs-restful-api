import { PrismaService } from '../prisma.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
export declare class CommandesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCommandeDto: CreateCommandeDto): Promise<{
        id: number;
        date: Date;
        utilisateurId: number;
    }>;
    findAll(): Promise<({
        utilisateur: {
            id: number;
            nom: string;
            email: string;
            motDePasse: string;
            role: string;
        };
        produits: ({
            produit: {
                id: number;
                nom: string;
                description: string;
                prix: number;
            };
        } & {
            id: number;
            quantite: number;
            produitId: number;
            commandeId: number;
        })[];
    } & {
        id: number;
        date: Date;
        utilisateurId: number;
    })[]>;
    findOne(id: number): Promise<{
        utilisateur: {
            id: number;
            nom: string;
            email: string;
            motDePasse: string;
            role: string;
        };
        produits: ({
            produit: {
                id: number;
                nom: string;
                description: string;
                prix: number;
            };
        } & {
            id: number;
            quantite: number;
            produitId: number;
            commandeId: number;
        })[];
    } & {
        id: number;
        date: Date;
        utilisateurId: number;
    }>;
    update(id: number, updateCommandeDto: UpdateCommandeDto): Promise<{
        utilisateur: {
            id: number;
            nom: string;
            email: string;
            motDePasse: string;
            role: string;
        };
        produits: ({
            produit: {
                id: number;
                nom: string;
                description: string;
                prix: number;
            };
        } & {
            id: number;
            quantite: number;
            produitId: number;
            commandeId: number;
        })[];
    } & {
        id: number;
        date: Date;
        utilisateurId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        date: Date;
        utilisateurId: number;
    }>;
}
