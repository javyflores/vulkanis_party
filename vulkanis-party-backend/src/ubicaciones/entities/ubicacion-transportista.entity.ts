// src/ubicaciones/entities/ubicacion-transportista.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ubicaciones_transportista')
export class UbicacionTransportista {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  idSolicitudTransporte: string; // Opcional: si está vinculado a una solicitud

  @Column({ type: 'uuid' }) // Relación con usuario transportista
  idUsuario: string;

  @Column({ type: 'numeric', precision: 9, scale: 6 }) // Latitud GPS
  latitud: number;

  @Column({ type: 'numeric', precision: 9, scale: 6 }) // Longitud GPS
  longitud: number;

  @Column({ type: 'text', nullable: true }) // Dirección opcional
  descripcion?: string;

  @Column({ type: 'timestamptz', default: 'NOW()' }) // Fecha/hora registro
  createdAt: Date;
}