// src/ubicaciones/dto/update-ubicacion.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateUbicacionDto } from './create-ubicacion.dto';

export class UpdateUbicacionDto extends PartialType(CreateUbicacionDto) {}