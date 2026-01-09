// src/ubicaciones/ubicacion.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionTransportista } from './entities/ubicacion-transportista.entity';
import { UbicacionService } from './ubicacion.service';
import { UbicacionController } from './ubicacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UbicacionTransportista])],
  providers: [UbicacionService],
  controllers: [UbicacionController],
})
export class UbicacionModule {}