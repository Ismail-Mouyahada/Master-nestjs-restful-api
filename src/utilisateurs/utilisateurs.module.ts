import { Module } from '@nestjs/common';
 
import { UtilisateursController } from './utilisateurs.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilisateursService } from './utilisateurs.service';
import { PrismaModule } from 'src/prisma/prisma.module';
 
@Module({
  imports:[PrismaModule],
  controllers: [UtilisateursController],
  providers: [UtilisateursService],
  exports: [UtilisateursService],
})
export class UtilisateursModule {}
