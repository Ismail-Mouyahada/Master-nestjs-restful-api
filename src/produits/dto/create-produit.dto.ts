import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, isString } from "class-validator";

export class CreateProduitDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    image?: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nom: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @ApiProperty()
    @IsNumber()
    prix: number;
}
