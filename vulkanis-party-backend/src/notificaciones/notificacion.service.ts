// src/notificaciones/notificacion.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from './entities/notificacion.entity';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class NotificacionService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepository: Repository<Notificacion>,
  ) {}

  async findAll(): Promise<Notificacion[]> {
    return await this.notificacionRepository.find();
  }

  async findOne(id: string): Promise<Notificacion> {
    const notificacion = await this.notificacionRepository.findOne({
      where: { id },
    });
    if (!notificacion) {
      throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
    }
    return notificacion;
  }

  async create(dto: CreateNotificacionDto): Promise<Notificacion> {
    const nueva = this.notificacionRepository.create(dto);
    return await this.notificacionRepository.save(nueva);
  }

  async update(id: string, dto: UpdateNotificacionDto): Promise<Notificacion> {
    const notificacion = await this.notificacionRepository.preload({
      id,
      ...dto,
    });

    if (!notificacion) {
      throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
    }

    return await this.notificacionRepository.save(notificacion);
  }

  async delete(id: string): Promise<void> {
    const result = await this.notificacionRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
    }
  }
}