// src/inventario/inventario-servicio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventarioServicio } from './entities/inventario-servicio.entity';
import { CreateInventarioServicioDto } from './dto/create-inventario-servicio.dto';
import { UpdateInventarioServicioDto } from './dto/update-inventario-servicio.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class InventarioServicioService {
  constructor(
    @InjectRepository(InventarioServicio)
    private readonly inventarioRepository: Repository<InventarioServicio>,
  ) {}

  async findAll(): Promise<InventarioServicio[]> {
    return await this.inventarioRepository.find({ relations: ['servicio'] });
  }

  async findOne(id: string): Promise<InventarioServicio> {
    const item = await this.inventarioRepository.findOne({
      where: { id },
      relations: ['servicio'],
    });
    if (!item) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }
    return item;
  }

  async create(dto: CreateInventarioServicioDto): Promise<InventarioServicio> {
    const newItem = this.inventarioRepository.create(dto);
    return await this.inventarioRepository.save(newItem);
  }

  async update(id: string, dto: UpdateInventarioServicioDto): Promise<InventarioServicio> {
    const item = await this.inventarioRepository.preload({
      id,
      ...dto,
    });

    if (!item) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }

    return await this.inventarioRepository.save(item);
  }

  async delete(id: string): Promise<void> {
    const result = await this.inventarioRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }
  }
}