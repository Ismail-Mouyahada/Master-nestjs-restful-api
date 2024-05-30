// auth.controller.ts
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './middlwares/auth.guard';
import { AuthService } from './auth.service';
import { ConnexionDto } from './dto/connexion-auth.dto';
import { InscriptionDto } from './dto/Inscription-auth.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('connexion')
  connexion(@Body() signInDto: ConnexionDto) { // Utilisez le DTO ici
    return this.authService.connexion(signInDto.email, signInDto.motDePasse);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('inscription')
  inscription(@Body() signUpDto: InscriptionDto) {
    return this.authService.inscription(signUpDto); // Assurez-vous d'implémenter cette méthode dans AuthService
  }

  
}
