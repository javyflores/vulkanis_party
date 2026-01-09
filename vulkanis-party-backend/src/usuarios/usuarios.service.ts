// src/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({ relations: ['rol'] });
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id }, relations: ['rol'] });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async create(usuario: CreateUsuarioDto): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(usuario);
    return await this.usuarioRepository.save(nuevoUsuario);
  }

  async update(id: string, usuario: UpdateUsuarioDto): Promise<Usuario> {
    const result = await this.usuarioRepository.update(id, usuario);

    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    const updatedUser = await this.usuarioRepository.findOne({ where: { id }, relations: ['rol'] });

    if (!updatedUser) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado después de la actualización`);
    }

    return updatedUser;
  }
  
  async delete(id: string): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}