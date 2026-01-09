// src/eventos/dto/create-evento.dto.ts
import { IsString, IsDate, IsOptional, IsUUID, Matches } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  nombreEvento: string;

  @IsDate()
  fechaEvento: Date;

  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'horaInicio debe tener el formato HH:mm:ss',
  })
  horaInicio: string;

  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'horaFin debe tener el formato HH:mm:ss',
  })
  horaFin: string;

  @IsString()
  nombreUbicacion: string;

  @IsString()
  direccionUbicacion: string;

  @IsString()
  @IsOptional()
  notas?: string;

  @IsString()
  estado: string;

  @IsUUID()
  idCliente: string;

  @IsUUID()
  @IsOptional()
  idAsesor?: string;

  @IsUUID()
  @IsOptional()
  idProductor?: string;
}