import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './middlwares/jwt.strategy';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';
import { UtilisateursModule } from '../utilisateurs/utilisateurs.module';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the path based on your actual structure
import { jwtConstants } from './constants';

@Module({
  imports: [
    UtilisateursModule,
    PrismaModule, // Include PrismaModule here
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, UtilisateursService],
  controllers: [AuthController],
})
export class AuthModule {}
