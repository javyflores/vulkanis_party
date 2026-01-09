// src/personal/dto/create-perfil-personal.dto.ts
import { IsUUID, IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreatePerfilPersonalDto {
  @IsUUID()
  idUsuario: string;

  @IsUUID()
  idServicio: string;

  @IsString()
  @IsOptional()
  especialidad?: string;

  @IsNumber()
  @IsOptional()
  tarifaPorHora?: number;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString({ each: true })
  @IsOptional()
  urlsPortafolio?: string[];

  @IsBoolean()
  @IsOptional()
  estaDisponible?: boolean;
}