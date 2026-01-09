// src/ubicaciones/ubicacion.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UbicacionTransportista } from './entities/ubicacion-transportista.entity';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(UbicacionTransportista)
    private readonly ubicacionRepository: Repository<UbicacionTransportista>,
  ) {}

  async findAll(): Promise<UbicacionTransportista[]> {
    return await this.ubicacionRepository.find();
  }

  async findOne(id: string): Promise<UbicacionTransportista> {
    const ubicacion = await this.ubicacionRepository.findOne({
      where: { id },
    });
    if (!ubicacion) {
      throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
    }
    return ubicacion;
  }

  async create(dto: CreateUbicacionDto): Promise<UbicacionTransportista> {
    const nueva = this.ubicacionRepository.create(dto);
    return await this.ubicacionRepository.save(nueva);
  }

  async update(id: string, dto: UpdateUbicacionDto): Promise<UbicacionTransportista> {
    const ubicacion = await this.ubicacionRepository.preload({
      id,
      ...dto,
    });

    if (!ubicacion) {
      throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
    }

    return await this.ubicacionRepository.save(ubicacion);
  }

  async delete(id: string): Promise<void> {
    const result = await this.ubicacionRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
    }
  }
}