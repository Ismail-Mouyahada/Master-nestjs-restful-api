import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { CommandesModule } from './commandes/commandes.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';

@Module({
  imports: [ProduitsModule, CommandesModule, UtilisateursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
