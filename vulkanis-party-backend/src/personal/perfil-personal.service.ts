// src/personal/perfil-personal.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerfilPersonal } from './entities/perfil-personal.entity';
import { CreatePerfilPersonalDto } from './dto/create-perfil-personal.dto';
import { UpdatePerfilPersonalDto } from './dto/update-perfil-personal.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PerfilPersonalService {
  constructor(
    @InjectRepository(PerfilPersonal)
    private readonly perfilRepository: Repository<PerfilPersonal>,
  ) {}

  async findAll(): Promise<PerfilPersonal[]> {
    return await this.perfilRepository.find({ relations: ['usuario', 'servicio'] });
  }

  async findOne(id: string): Promise<PerfilPersonal> {
    const perfil = await this.perfilRepository.findOne({
      where: { id },
      relations: ['usuario', 'servicio'],
    });
    if (!perfil) {
      throw new NotFoundException(`Perfil con ID ${id} no encontrado`);
    }
    return perfil;
  }

  async create(dto: CreatePerfilPersonalDto): Promise<PerfilPersonal> {
    const nuevoPerfil = this.perfilRepository.create(dto);
    return await this.perfilRepository.save(nuevoPerfil);
  }

  async update(id: string, dto: UpdatePerfilPersonalDto): Promise<PerfilPersonal> {
    const perfil = await this.perfilRepository.preload({
      id,
      ...dto,
    });

    if (!perfil) {
      throw new NotFoundException(`Perfil con ID ${id} no encontrado`);
    }

    return await this.perfilRepository.save(perfil);
  }

  async delete(id: string): Promise<void> {
    const result = await this.perfilRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Perfil con ID ${id} no encontrado`);
    }
  }
}