import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';

@Controller('utilisateurs')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Post()
  create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateursService.create(createUtilisateurDto);
  }

  @Get()
  findAll() {
    return this.utilisateursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.utilisateursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.utilisateursService.update(+id, updateUtilisateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilisateursService.remove(+id);
  }
}
