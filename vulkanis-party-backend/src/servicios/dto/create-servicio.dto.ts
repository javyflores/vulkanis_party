// src/servicios/dto/create-servicio.dto.ts
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateServicioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsNumber()
  @IsOptional()
  precioBase?: number;

  @IsString()
  @IsOptional()
  unidadPrecio?: string;

  @IsNumber()
  @IsOptional()
  duracionMinimaHoras?: number;

  @IsNumber()
  @IsOptional()
  unidadesMinimas?: number;

  @IsBoolean()
  @IsOptional()
  requiereOperador?: boolean;

  @IsBoolean()
  @IsOptional()
  requiereTransporte?: boolean;

  @IsBoolean()
  @IsOptional()
  controladoInventario?: boolean;

  @IsString({ each: true })
  @IsOptional()
  urlsImagenes?: string[];

  @IsBoolean()
  @IsOptional()
  estaActivo?: boolean;
}