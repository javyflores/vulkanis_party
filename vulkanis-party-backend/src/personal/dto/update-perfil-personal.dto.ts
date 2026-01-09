// src/personal/dto/update-perfil-personal.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreatePerfilPersonalDto } from './create-perfil-personal.dto';

export class UpdatePerfilPersonalDto extends PartialType(CreatePerfilPersonalDto) {}