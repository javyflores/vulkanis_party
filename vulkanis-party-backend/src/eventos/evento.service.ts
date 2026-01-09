// src/eventos/evento.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async findAll(): Promise<Evento[]> {
    return await this.eventoRepository.find({ relations: ['cliente', 'asesor', 'productor'] });
  }

  async findOne(id: string): Promise<Evento> {
    const evento = await this.eventoRepository.findOne({ where: { id }, relations: ['cliente', 'asesor', 'productor'] });
    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    return evento;
  }

  async create(dto: CreateEventoDto): Promise<Evento> {
    const evento = this.eventoRepository.create(dto);
    return await this.eventoRepository.save(evento);
  }

  async update(id: string, dto: UpdateEventoDto): Promise<Evento> {
    const evento = await this.eventoRepository.preload({ id, ...dto });
    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    return await this.eventoRepository.save(evento);
  }

  async delete(id: string): Promise<void> {
    const result = await this.eventoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
  }

  async getCotizacionesDelCliente(idCliente: string): Promise<Evento[]> {
    return await this.eventoRepository.find({
      where: { cliente: { id: idCliente } },
      relations: ['cliente', 'asesor', 'productor'],
    });
  }
}