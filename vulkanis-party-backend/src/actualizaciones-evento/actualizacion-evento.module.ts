// src/actualizaciones-evento/actualizacion-evento.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActualizacionEvento } from './entities/actualizacion-evento.entity';
import { UbicacionTransportista } from '.././ubicaciones/entities/ubicacion-transportista.entity'; // Importa UbicacionTransportista
import { ActualizacionEventoService } from './actualizacion-evento.service';
import { ActualizacionEventoController } from './actualizacion-evento.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActualizacionEvento, UbicacionTransportista]), // Incluye ambas entidades
  ],
  providers: [ActualizacionEventoService],
  controllers: [ActualizacionEventoController],
})
export class ActualizacionEventoModule {}