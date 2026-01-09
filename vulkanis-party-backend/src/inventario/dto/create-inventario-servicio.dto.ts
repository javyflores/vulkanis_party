// src/inventario/dto/create-inventario-servicio.dto.ts
import { IsUUID, IsString, IsOptional } from 'class-validator';

export class CreateInventarioServicioDto {
  @IsUUID()
  idServicio: string;

  @IsString()
  @IsOptional()
  numeroSerie?: string;

  @IsString()
  @IsOptional()
  estado?: string;

  @IsString()
  @IsOptional()
  ubicacion?: string;
}