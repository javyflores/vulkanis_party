// src/ubicaciones/ubicacion.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { UbicacionTransportista } from './entities/ubicacion-transportista.entity';

@Controller('ubicaciones')
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @Post()
  async create(@Body() dto: CreateUbicacionDto): Promise<UbicacionTransportista> {
    return await this.ubicacionService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UbicacionTransportista> {
    return await this.ubicacionService.findOne(id);
  }

  @Get()
  async findAll(): Promise<UbicacionTransportista[]> {
    return await this.ubicacionService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUbicacionDto): Promise<UbicacionTransportista> {
    return await this.ubicacionService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.ubicacionService.delete(id);
  }
}