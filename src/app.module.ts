import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';

@Module({
  imports: [ProduitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
