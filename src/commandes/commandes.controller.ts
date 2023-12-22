import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Controller('api/v1/commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandesService.create(createCommandeDto);
  }

  @Get("liste")
  async findAll() {
    return this.commandesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.commandesService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: string, @Body() updateCommandeDto: CreateCommandeDto) {
    return this.commandesService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.commandesService.remove(+id);
  }
}
