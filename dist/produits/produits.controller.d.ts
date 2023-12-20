import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
export declare class ProduitsController {
    private readonly produitsService;
    constructor(produitsService: ProduitsService);
    create(createProduitDto: CreateProduitDto): Promise<{
        id: number;
        nom: string;
        description: string;
        prix: number;
    }>;
    findAll(): Promise<{
        id: number;
        nom: string;
        description: string;
        prix: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        nom: string;
        description: string;
        prix: number;
    }>;
    update(id: string, updateProduitDto: UpdateProduitDto): Promise<{
        id: number;
        nom: string;
        description: string;
        prix: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        nom: string;
        description: string;
        prix: number;
    }>;
}
