// src/permisos/permiso.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { Permiso } from './entities/permiso.entity';

@Controller('permisos')
export class PermisoController {
  constructor(private readonly permisoService: PermisoService) {}

  @Get()
  async findAll(): Promise<Permiso[]> {
    return await this.permisoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Permiso> {
    return await this.permisoService.findOne(id);
  }

  @Post()
  async create(@Body() createPermisoDto: CreatePermisoDto): Promise<Permiso> {
    return await this.permisoService.create(createPermisoDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePermisoDto: UpdatePermisoDto): Promise<Permiso> {
    return await this.permisoService.update(id, updatePermisoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.permisoService.delete(id);
  }
}