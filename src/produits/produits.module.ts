import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProduitsController],
  providers: [ProduitsService, PrismaService],
})
export class ProduitsModule {}
