// src/permisos/dto/update-permiso.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreatePermisoDto } from './create-permiso.dto';

export class UpdatePermisoDto extends PartialType(CreatePermisoDto) {}