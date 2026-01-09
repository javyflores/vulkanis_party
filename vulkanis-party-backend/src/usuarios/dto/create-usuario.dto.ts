// src/usuarios/dto/create-usuario.dto.ts
import { IsEmail, IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateUsuarioDto {
  @IsEmail()
  correoElectronico: string;

  @IsString()
  hashContrasena: string;

  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  apellido?: string;

  @IsString()
  @IsOptional()
  numeroTelefono?: string;

  @IsString()
  @IsOptional()
  direccion?: string;

  @IsString()
  idRol: string;

  @IsString()
  @IsOptional()
  estado?: string;

  @IsString()
  @IsOptional()
  urlFotoPerfil?: string;
}