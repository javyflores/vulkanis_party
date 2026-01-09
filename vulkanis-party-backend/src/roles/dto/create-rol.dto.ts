// src/roles/dto/create-rol.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRolDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}