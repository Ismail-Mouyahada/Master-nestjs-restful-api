import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { JwtAuthGuard } from 'src/auth/middlwares/jwt-auth.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/middlwares/roles.guard';

@Controller('api/v1/utilisateurs')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateursService.create(createUtilisateurDto);
  }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('liste')
  findAll() {
    return this.utilisateursService.findAll();
  }


 @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.utilisateursService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUtilisateurDto: UpdateUtilisateurDto,
  ) {
    return this.utilisateursService.update(+id, updateUtilisateurDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilisateursService.remove(+id);
  }
}
