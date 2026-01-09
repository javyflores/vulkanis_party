// src/inventario/dto/update-inventario-servicio.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateInventarioServicioDto } from './create-inventario-servicio.dto';

export class UpdateInventarioServicioDto extends PartialType(CreateInventarioServicioDto) {}
