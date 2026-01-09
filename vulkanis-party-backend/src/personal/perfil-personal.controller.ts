// src/personal/perfil-personal.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PerfilPersonal } from './entities/perfil-personal.entity';
import { PerfilPersonalService } from './perfil-personal.service';
import { CreatePerfilPersonalDto } from './dto/create-perfil-personal.dto';
import { UpdatePerfilPersonalDto } from './dto/update-perfil-personal.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('personal')
@Controller('personal')
export class PerfilPersonalController {
  constructor(private readonly perfilService: PerfilPersonalService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los perfiles de personal' })
  @ApiResponse({ status: 200, description: 'Lista de perfiles obtenida correctamente.' })
  async findAll(): Promise<PerfilPersonal[]> {
    return await this.perfilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un perfil por ID' })
  @ApiResponse({ status: 200, description: 'Perfil obtenido correctamente.' })
  @ApiResponse({ status: 404, description: 'Perfil no encontrado.' })
  async findOne(@Param('id') id: string): Promise<PerfilPersonal> {
    return await this.perfilService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo perfil de personal' })
  @ApiResponse({ status: 201, description: 'Perfil creado correctamente.' })
  async create(@Body() dto: CreatePerfilPersonalDto): Promise<PerfilPersonal> {
    return await this.perfilService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un perfil de personal' })
  @ApiResponse({ status: 200, description: 'Perfil actualizado correctamente.' })
  @ApiResponse({ status: 404, description: 'Perfil no encontrado.' })
  async update(@Param('id') id: string, @Body() dto: UpdatePerfilPersonalDto): Promise<PerfilPersonal> {
    return await this.perfilService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un perfil de personal' })
  @ApiResponse({ status: 200, description: 'Perfil eliminado correctamente.' })
  @ApiResponse({ status: 404, description: 'Perfil no encontrado.' })
  async remove(@Param('id') id: string): Promise<void> {
    return await this.perfilService.delete(id);
  }
}