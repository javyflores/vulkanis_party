// src/servicios/servicio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}

  async findAll(): Promise<Servicio[]> {
    return await this.servicioRepository.find();
  }

  async findOne(id: string): Promise<Servicio> {
    const servicio = await this.servicioRepository.findOne({ where: { id } });
    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }
    return servicio;
  }

  async create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    const nuevoServicio = this.servicioRepository.create(createServicioDto);
    return await this.servicioRepository.save(nuevoServicio);
  }

  async update(id: string, updateServicioDto: UpdateServicioDto): Promise<Servicio> {
    const servicio = await this.servicioRepository.preload({
      id,
      ...updateServicioDto,
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }

    return await this.servicioRepository.save(servicio);
  }

  async delete(id: string): Promise<void> {
    const result = await this.servicioRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }
  }

  async findTopServicios(): Promise<Servicio[]> {
    return await this.servicioRepository.find({
      where: { estaActivo: true },
      order: { valoracionPromedio: 'DESC' as any },
      take: 3,
    });
  }

}