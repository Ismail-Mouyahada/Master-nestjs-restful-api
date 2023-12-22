import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/middlwares/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/middlwares/jwt-auth.guard';

@Controller('api/v1/produits')
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}

  @Post()
  async create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitsService.create(createProduitDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire','client')
  @Get('liste')
  async findAll() {
    return this.produitsService.findAll();
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire','client')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.produitsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProduitDto: UpdateProduitDto) {
    return this.produitsService.update(+id, updateProduitDto);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','gestionnaire')
  @Get('liste')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.produitsService.remove(+id);
  }
}
