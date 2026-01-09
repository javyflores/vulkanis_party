// src/roles/entities/rol.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Permiso } from '../../permisos/entities/permiso.entity';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  updatedAt: Date;

  // Relación inversa con usuarios
  @OneToMany(() => Usuario, usuario => usuario.rol)
  usuarios: Usuario[];

  // Relación muchos a muchos con permisos
  @ManyToMany(() => Permiso, permiso => permiso.roles)
  permisos: Permiso[];
}