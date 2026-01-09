// src/eventos/evento.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Req } from '@nestjs/common';
import { Evento } from './entities/evento.entity';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  async findAll(): Promise<Evento[]> {
    return await this.eventoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Evento> {
    return await this.eventoService.findOne(id);
  }

  @Get('cliente/yo')
  async getCotizacionesDelCliente(@Req() req) {
    const idCliente = req.user.id; // ✅ Esto funciona si usas autenticación JWT
    return await this.eventoService.getCotizacionesDelCliente(idCliente);
  }

  @Post()
  async create(@Body() dto: CreateEventoDto): Promise<Evento> {
    return await this.eventoService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateEventoDto): Promise<Evento> {
    return await this.eventoService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.eventoService.delete(id);
  }
}