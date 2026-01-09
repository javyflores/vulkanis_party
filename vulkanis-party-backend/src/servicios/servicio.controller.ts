// src/servicios/servicio.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Servicio } from './entities/servicio.entity';
import { ServicioService } from './servicio.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Controller('servicios')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get()
  async findAll(): Promise<Servicio[]> {
    return await this.servicioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Servicio> {
    return await this.servicioService.findOne(id);
  }

  @Post()
  async create(@Body() createServicioDto: CreateServicioDto): Promise<Servicio> {
    return await this.servicioService.create(createServicioDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateServicioDto: UpdateServicioDto): Promise<Servicio> {
    return await this.servicioService.update(id, updateServicioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.servicioService.delete(id);
  }

  @Get('destacados')
  async getTopServicios(): Promise<Servicio[]> {
    return await this.servicioService.findTopServicios();
  }

}