// src/actualizaciones-evento/dto/create-actualizacion-evento.dto.ts
import { IsUUID, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateActualizacionEventoDto {
  @IsUUID()
  idEvento: string;

  @IsUUID()
  idUsuario: string;

  @IsUUID()
  idServicio: string;  

  @IsString()
  tipo: string;

  @IsString()
  mensaje: string;

    @IsUUID()
  @IsOptional()
  idUbicacion?: string;

  @IsNumber()
  @IsOptional()
  latitudUbicacion?: number;

  @IsNumber()
  @IsOptional()
  longitudUbicacion?: number;
}