// src/personal/entities/perfil-personal.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Servicio } from '../../servicios/entities/servicio.entity';

@Entity('perfiles_personal')
export class PerfilPersonal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Servicio, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio;

  @Column({ type: 'varchar', length: 100, nullable: true })
  especialidad: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  tarifaPorHora: number;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'json', nullable: true })
  urlsPortafolio: string[];

  @Column({ type: 'boolean', default: true })
  estaDisponible: boolean;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  updatedAt: Date;
}