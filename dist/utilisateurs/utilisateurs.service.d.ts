import { PrismaService } from 'src/prisma.service';
export declare class UtilisateursService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUtilisateurDto: any): Promise<{
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
    findOne(id: number): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
    update(id: number, updateUtilisateurDto: any): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
    private hashPassword;
}
