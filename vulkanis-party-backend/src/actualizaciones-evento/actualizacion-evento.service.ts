// src/actualizaciones-evento/actualizacion-evento.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActualizacionEvento } from './entities/actualizacion-evento.entity';
import { CreateActualizacionEventoDto } from './dto/create-actualizacion-evento.dto';
import { UpdateActualizacionEventoDto } from './dto/update-actualizacion-evento.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ActualizacionEventoService {
  constructor(
    @InjectRepository(ActualizacionEvento)
    private readonly actualizacionRepository: Repository<ActualizacionEvento>,
  ) {}

  async findAll(): Promise<ActualizacionEvento[]> {
    return await this.actualizacionRepository.find();
  }

  async findOne(id: string): Promise<ActualizacionEvento> {
    const actualizacion = await this.actualizacionRepository.findOne({
      where: { id },
    });
    if (!actualizacion) {
      throw new NotFoundException(`Actualización con ID ${id} no encontrada`);
    }
    return actualizacion;
  }

  async create(dto: CreateActualizacionEventoDto): Promise<ActualizacionEvento> {
    const nueva = this.actualizacionRepository.create(dto);
    return await this.actualizacionRepository.save(nueva);
  }

  async update(id: string, dto: UpdateActualizacionEventoDto): Promise<ActualizacionEvento> {
    const actualizacion = await this.actualizacionRepository.preload({
      id,
      ...dto,
    });

    if (!actualizacion) {
      throw new NotFoundException(`Actualización con ID ${id} no encontrada`);
    }

    return await this.actualizacionRepository.save(actualizacion);
  }

  async delete(id: string): Promise<void> {
    const result = await this.actualizacionRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Actualización con ID ${id} no encontrada`);
    }
  }
}