// src/actualizaciones-evento/dto/update-actualizacion-evento.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateActualizacionEventoDto } from './create-actualizacion-evento.dto';

export class UpdateActualizacionEventoDto extends PartialType(CreateActualizacionEventoDto) {}