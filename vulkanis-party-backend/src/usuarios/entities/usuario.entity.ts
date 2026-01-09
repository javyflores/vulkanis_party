// src/usuarios/entities/usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from '../../roles/entities/rol.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    name: 'correo_electronico'
  })
  correoElectronico: string;

  @Column({
    type: 'text',
    name: 'hash_contrasena'
  })
  hashContrasena: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'nombre'
  })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'apellido'
  })
  apellido: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
    name: 'numero_telefono'
  })
  numeroTelefono: string;

  @Column({
    type: 'text',
    nullable: true,
    name: 'direccion'
  })
  direccion: string;

  @Column({
    type: 'uuid',
    name: 'id_rol'
  })
  idRol: string;

  @Column({
    type: 'varchar',
    length: 20,
    default: () => `'pendiente'::varchar`,
    name: 'estado'
  })
  estado: string;

  @Column({
    type: 'text',
    nullable: true,
    name: 'url_foto_perfil'
  })
  urlFotoPerfil: string;

  @Column({
    type: 'timestamptz',
    default: 'NOW()',
    name: 'created_at'
  })
  createdAt: Date;

  @Column({
    type: 'timestamptz',
    default: 'NOW()',
    name: 'updated_at'
  })
  updatedAt: Date;

  // Relación con Rol
  @ManyToOne(() => Rol, { eager: false })
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;
}