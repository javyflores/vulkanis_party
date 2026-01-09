// src/servicios/entities/servicio.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('servicios')
export class Servicio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', length: 50 })
  tipo: string; // ej. alquiler_equipo, comida, animador, etc.

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  precioBase: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  unidadPrecio: string; // por_hora, por_unidad, por_evento

  @Column({ type: 'integer', nullable: true })
  duracionMinimaHoras: number;

  @Column({ type: 'integer', nullable: true })
  unidadesMinimas: number;

  @Column({ type: 'boolean', default: false })
  requiereOperador: boolean;

  @Column({ type: 'boolean', default: false })
  requiereTransporte: boolean;

  @Column({ type: 'boolean', default: false })
  controladoInventario: boolean;

  @Column({ type: 'json', nullable: true })
  urlsImagenes: string[];

  @Column({ type: 'boolean', default: true })
  estaActivo: boolean;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  updatedAt: Date;

  @Column({
    type: 'numeric',
    precision: 3,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  valoracionPromedio: number;

}