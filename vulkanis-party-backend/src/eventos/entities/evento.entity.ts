// src/eventos/entities/evento.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('eventos')
export class Evento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  nombreEvento: string;

  @Column({ type: 'date' })
  fechaEvento: Date;

  @Column({ type: 'time' })
  horaInicio: string;

  @Column({ type: 'time' })
  horaFin: string;

  @Column({ type: 'varchar', length: 100 })
  nombreUbicacion: string;

  @Column({ type: 'text' })
  direccionUbicacion: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  precioTotal: number;

  @Column({ type: 'varchar', length: 30, default: () => `'cotizacion'::varchar` })
  estado: string; // cotizacion, confirmado, en_curso, finalizado, cancelado

  @Column({ type: 'text', nullable: true })
  notas: string;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  updatedAt: Date;

  // Relaciones
  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_cliente' })
  cliente: Usuario;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_asesor' })
  asesor: Usuario;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_productor' })
  productor: Usuario;
}