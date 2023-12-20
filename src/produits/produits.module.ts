import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';

@Module({
  controllers: [ProduitsController],
  providers: [ProduitsService],
})
export class ProduitsModule {}
