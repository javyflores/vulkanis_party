// src/inventario/inventario-servicio.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InventarioServicio } from './entities/inventario-servicio.entity';
import { InventarioServicioService } from './inventario-servicio.service';
import { CreateInventarioServicioDto } from './dto/create-inventario-servicio.dto';
import { UpdateInventarioServicioDto } from './dto/update-inventario-servicio.dto';

@Controller('inventario')
export class InventarioServicioController {
  constructor(private readonly inventarioService: InventarioServicioService) {}

  @Get()
  async findAll(): Promise<InventarioServicio[]> {
    return await this.inventarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<InventarioServicio> {
    return await this.inventarioService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateInventarioServicioDto): Promise<InventarioServicio> {
    return await this.inventarioService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateInventarioServicioDto): Promise<InventarioServicio> {
    return await this.inventarioService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.inventarioService.delete(id);
  }
}