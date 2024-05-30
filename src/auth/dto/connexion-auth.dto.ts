import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsArray, ArrayNotEmpty, ArrayMinSize, Min, IsString } from 'class-validator';

export class ConnexionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  motDePasse: string;
}
