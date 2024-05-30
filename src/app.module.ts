import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { CommandesModule } from './commandes/commandes.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ProduitsModule,
    CommandesModule,
    UtilisateursModule,
    AuthModule,
    PrismaModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
