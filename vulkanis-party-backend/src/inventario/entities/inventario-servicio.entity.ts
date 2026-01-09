// src/inventario/entities/inventario-servicio.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Servicio } from '../../servicios/entities/servicio.entity';

@Entity('inventario_servicio')
export class InventarioServicio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Servicio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio;

  @Column({ type: 'text', unique: true, nullable: true })
  numeroSerie: string;

  @Column({ type: 'varchar', length: 30, default: () => `'disponible'::varchar` })
  estado: string; // disponible, en_evento, en_mantenimiento

  @Column({ type: 'text', nullable: true })
  ubicacion: string;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  updatedAt: Date;
}