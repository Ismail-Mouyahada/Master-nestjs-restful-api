import { JwtService } from '@nestjs/jwt';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import { InscriptionDto } from './dto/Inscription-auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UtilisateursService, jwtService: JwtService);
    connexion(email: string, motDePasse: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    validateUserById(userId: string): Promise<{
        id: number;
        nom: string;
        prenom: string;
        email: string;
        motDePasse: string;
        role: string;
    }>;
    inscription(inscriptionDto: InscriptionDto): Promise<{
        message: string;
        statusCode: number;
    } | {
        message: string;
        statusCode?: undefined;
    }>;
    private comparePasswords;
    private generateRefreshToken;
}
