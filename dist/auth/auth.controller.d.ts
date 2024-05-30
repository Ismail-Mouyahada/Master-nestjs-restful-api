import { AuthService } from './auth.service';
import { ConnexionDto } from './dto/connexion-auth.dto';
import { InscriptionDto } from './dto/Inscription-auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    connexion(signInDto: ConnexionDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    inscription(signUpDto: InscriptionDto): Promise<{
        message: string;
        statusCode: number;
    } | {
        message: string;
        statusCode?: undefined;
    }>;
}
