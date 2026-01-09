// src/inventario/inventario.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioServicio } from './entities/inventario-servicio.entity';
import { InventarioServicioService } from './inventario-servicio.service';
import { InventarioServicioController } from './inventario-servicio.controller';
import { Servicio } from '../servicios/entities/servicio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventarioServicio, Servicio])
  ],
  providers: [InventarioServicioService],
  controllers: [InventarioServicioController],
})
export class InventarioModule {}