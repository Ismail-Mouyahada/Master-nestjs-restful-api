import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { JwtAuthGuard } from 'src/auth/middlwares/jwt-auth.guard';
import { RolesGuard } from 'src/auth/middlwares/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('api/v1/commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire','client')
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandesService.create(createCommandeDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire')
  @Get("liste")
  async findAll() {
    return this.commandesService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.commandesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire' )
  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: string, @Body() updateCommandeDto: CreateCommandeDto) {
    return this.commandesService.update(+id, updateCommandeDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.commandesService.remove(+id);
  }
}
