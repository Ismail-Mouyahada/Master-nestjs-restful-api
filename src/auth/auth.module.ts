import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
 
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { UtilisateursModule } from 'src/utilisateurs/utilisateurs.module';
import { JwtStrategy } from './middlwares/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UtilisateursModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}