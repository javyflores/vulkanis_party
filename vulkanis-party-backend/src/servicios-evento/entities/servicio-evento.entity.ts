// src/servicios-evento/entities/servicio-evento.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from '../../eventos/entities/evento.entity';
import { Servicio } from '../../servicios/entities/servicio.entity';
import { PerfilPersonal } from '../../personal/entities/perfil-personal.entity'; // ✅ Ahora debería estar bien
import { InventarioServicio } from '../../inventario/entities/inventario-servicio.entity';

@Entity('servicios_evento')
export class ServicioEvento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Evento, evento => evento.id)
  @JoinColumn({ name: 'id_evento' })
  evento: Evento;

  @ManyToOne(() => Servicio, servicio => servicio.id)
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio;

  @ManyToOne(() => PerfilPersonal, perfil => perfil.id, { nullable: true })
  @JoinColumn({ name: 'id_personal_asignado' })
  personalAsignado: PerfilPersonal;

  @ManyToOne(() => InventarioServicio, inventario => inventario.id, { nullable: true })
  @JoinColumn({ name: 'id_equipo_asignado' })
  equipoAsignado: InventarioServicio;

  @Column({ type: 'integer', nullable: true })
  cantidad: number;

  @Column({ type: 'integer', nullable: true })
  duracionHoras: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  precioServicio: number;

  @Column({ type: 'varchar', length: 30, default: () => `'pendiente'` })
  estado: string; // pendiente, confirmado, en_curso, finalizado

  @Column({ type: 'text', nullable: true })
  notas: string;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  updatedAt: Date;
}