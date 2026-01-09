// src/roles/rol.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  async findAll(): Promise<Rol[]> {
    return await this.rolService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Rol> {
    return await this.rolService.findOne(id);
  }

  @Post()
  async create(@Body() createRolDto: CreateRolDto): Promise<Rol> {
    return await this.rolService.create(createRolDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRolDto: UpdateRolDto): Promise<Rol> {
    return await this.rolService.update(id, updateRolDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.rolService.delete(id);
  }
}