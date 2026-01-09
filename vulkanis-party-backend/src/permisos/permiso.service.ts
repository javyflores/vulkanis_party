// src/permisos/permiso.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permiso } from './entities/permiso.entity';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PermisoService {
  constructor(
    @InjectRepository(Permiso)
    private readonly permisoRepository: Repository<Permiso>,
  ) {}

  async findAll(): Promise<Permiso[]> {
    return await this.permisoRepository.find();
  }

  async findOne(id: string): Promise<Permiso> {
    const permiso = await this.permisoRepository.findOne({ where: { id } });
    if (!permiso) {
      throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    }
    return permiso;
  }

  async create(createPermisoDto: CreatePermisoDto): Promise<Permiso> {
    const nuevoPermiso = this.permisoRepository.create(createPermisoDto);
    return await this.permisoRepository.save(nuevoPermiso);
  }

  async update(id: string, updatePermisoDto: UpdatePermisoDto): Promise<Permiso> {
    const permiso = await this.permisoRepository.preload({
      id,
      ...updatePermisoDto,
    });

    if (!permiso) {
      throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    }

    return await this.permisoRepository.save(permiso);
  }

  async delete(id: string): Promise<void> {
    const result = await this.permisoRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    }
  }
}