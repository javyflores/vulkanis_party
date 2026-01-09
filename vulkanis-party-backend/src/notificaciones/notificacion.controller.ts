// src/notificaciones/notificacion.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Notificacion } from './entities/notificacion.entity';
import { NotificacionService } from './notificacion.service';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Controller('notificaciones')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}

  @Get()
  async findAll(): Promise<Notificacion[]> {
    return await this.notificacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Notificacion> {
    return await this.notificacionService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateNotificacionDto): Promise<Notificacion> {
    return await this.notificacionService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateNotificacionDto,
  ): Promise<Notificacion> {
    return await this.notificacionService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.notificacionService.delete(id);
  }
}