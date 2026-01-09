// src/permisos/entities/permiso.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Rol } from '../../roles/entities/rol.entity';

@Entity('permisos')
export class Permiso {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  nombre: string; // Ejemplo: 'crear_usuario', 'editar_evento'

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @ManyToMany(() => Rol, { cascade: true })
  @JoinTable({
    name: 'rol_permisos',
    joinColumn: { name: 'id_permiso', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_rol', referencedColumnName: 'id' }
  })
  roles: Rol[];
}