import { Module } from '@nestjs/common';
 
import { UtilisateursController } from './utilisateurs.controller';
import { PrismaService } from 'src/prisma.service';
import { UtilisateursService } from './utilisateurs.service';
 
@Module({
  controllers: [UtilisateursController],
  providers: [UtilisateursService, PrismaService],
})
export class UtilisateursModule {}
