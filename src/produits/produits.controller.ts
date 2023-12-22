import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';

@Controller('api/v1/produits')
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}

  @Post()
  async create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitsService.create(createProduitDto);
  }

  @Get('liste')
  async findAll() {
    return this.produitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.produitsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProduitDto: UpdateProduitDto) {
    return this.produitsService.update(+id, updateProduitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.produitsService.remove(+id);
  }
}
