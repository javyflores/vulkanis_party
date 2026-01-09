// src/permisos/dto/create-permiso.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePermisoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}