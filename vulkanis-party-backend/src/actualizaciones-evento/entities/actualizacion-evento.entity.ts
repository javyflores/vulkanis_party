// src/actualizaciones-evento/entities/actualizacion-evento.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from '../../eventos/entities/evento.entity';
import { Servicio } from '../../servicios/entities/servicio.entity';
import { UbicacionTransportista } from '../../ubicaciones/entities/ubicacion-transportista.entity';

@Entity('actualizaciones_evento')
export class ActualizacionEvento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Evento, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_evento' })
  evento: Evento;

  @ManyToOne(() => Servicio)
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio;

  @ManyToOne(() => UbicacionTransportista, { nullable: true }) // Relación nueva
  @JoinColumn({ name: 'id_ubicacion' })
  ubicacion: UbicacionTransportista; // Puede ser null si no hay ubicación

  @Column({ type: 'varchar', length: 50 })
  tipo: string; // Ejemplos: 'llegada_productor', 'inicio_servicio', 'fin_servicio'

  @Column({ type: 'text' })
  mensaje: string;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  fechaHora: Date;

  @Column({ type: 'numeric', precision: 9, scale: 6, nullable: true })
  latitudUbicacion: number; // Opcional

  @Column({ type: 'numeric', precision: 9, scale: 6, nullable: true })
  longitudUbicacion: number; // Opcional

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;
}