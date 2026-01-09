// src/ubicaciones/dto/create-ubicacion.dto.ts
import { IsUUID, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUbicacionDto {
  @IsUUID()
  idUsuario: string;

  @IsUUID()
  @IsOptional()
  idSolicitudTransporte?: string;

  @IsNumber()
  latitud: number;

  @IsNumber()
  longitud: number;

  @IsString()
  @IsOptional()
  descripcion?: string;
}