import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';

@Injectable()
export class ProduitsService {
  create(createProduitDto: CreateProduitDto) {
    return 'This action adds a new produit';
  }

  findAll() {
    return `This action returns all produits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produit`;
  }

  update(id: number, updateProduitDto: UpdateProduitDto) {
    return `This action updates a #${id} produit`;
  }

  remove(id: number) {
    return `This action removes a #${id} produit`;
  }
}
