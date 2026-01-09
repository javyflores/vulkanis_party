// src/roles/dto/update-rol.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateRolDto } from './create-rol.dto';

export class UpdateRolDto extends PartialType(CreateRolDto) {}