// src/notificaciones/dto/create-notificacion.dto.ts
import { IsUUID, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateNotificacionDto {
  @IsUUID()
  idUsuario: string;

  @IsString()
  @IsOptional()
  tipo?: string;

  @IsString()
  mensaje: string;

  @IsBoolean()
  @IsOptional()
  leida?: boolean;

  @IsUUID()
  @IsOptional()
  idEntidadRelacionada?: string;

  @IsOptional()
  @IsString()
  createdAt?: string;
}