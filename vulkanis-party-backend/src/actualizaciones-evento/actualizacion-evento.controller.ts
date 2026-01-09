// src/actualizaciones-evento/actualizacion-evento.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ActualizacionEvento } from './entities/actualizacion-evento.entity';
import { ActualizacionEventoService } from './actualizacion-evento.service';
import { CreateActualizacionEventoDto } from './dto/create-actualizacion-evento.dto';
import { UpdateActualizacionEventoDto } from './dto/update-actualizacion-evento.dto';

@Controller('actualizaciones')
export class ActualizacionEventoController {
  constructor(private readonly actualizacionService: ActualizacionEventoService) {}

  @Get()
  async findAll(): Promise<ActualizacionEvento[]> {
    return await this.actualizacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ActualizacionEvento> {
    return await this.actualizacionService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateActualizacionEventoDto): Promise<ActualizacionEvento> {
    return await this.actualizacionService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateActualizacionEventoDto): Promise<ActualizacionEvento> {
    return await this.actualizacionService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.actualizacionService.delete(id);
  }
}