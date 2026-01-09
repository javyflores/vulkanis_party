// src/notificaciones/entities/notificacion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  idUsuario: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipo: string; // Ej: pago_recibido, nueva_asignacion, recordatorio_pago, evento_iniciado

  @Column({ type: 'text' })
  mensaje: string;

  @Column({ type: 'boolean', default: false })
  leida: boolean;

  @Column({ type: 'uuid', nullable: true })
  idEntidadRelacionada: string; // Puede apuntar a eventos, pagos, etc.

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;
}