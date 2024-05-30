import { Module } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CommandesController } from './commandes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CommandesController],
  providers: [CommandesService, PrismaService],
})
export class CommandesModule {}
