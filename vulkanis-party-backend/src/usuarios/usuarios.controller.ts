// src/usuarios/usuarios.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    return await this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuario> {
    return await this.usuariosService.findOne(id);
  }

  @Post()
  async create(@Body() usuario: CreateUsuarioDto): Promise<Usuario> {
    return await this.usuariosService.create(usuario);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() usuario: UpdateUsuarioDto): Promise<Usuario> {
    return await this.usuariosService.update(id, usuario);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.usuariosService.delete(id);
  }
}