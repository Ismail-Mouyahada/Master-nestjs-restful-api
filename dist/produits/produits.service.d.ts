import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProduitsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProduitDto: any): Promise<{
        id: number;
        image: string;
        nom: string;
        description: string;
        prix: number;
    }>;
    findAll(): Promise<{
        id: number;
        image: string;
        nom: string;
        description: string;
        prix: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        image: string;
        nom: string;
        description: string;
        prix: number;
    }>;
    update(id: number, updateProduitDto: any): Promise<{
        id: number;
        image: string;
        nom: string;
        description: string;
        prix: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        image: string;
        nom: string;
        description: string;
        prix: number;
    }>;
}
