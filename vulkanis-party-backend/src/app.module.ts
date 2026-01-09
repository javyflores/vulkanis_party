// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolModule } from './roles/rol.module';
import { PermisoModule } from './permisos/permiso.module';
import { ServicioModule } from './servicios/servicio.module';
import { EventoModule } from './eventos/evento.module';
import { InventarioModule } from './inventario/inventario.module';
import { PersonalModule } from './personal/perfil-personal.module';
import { NotificacionModule } from './notificaciones/notificacion.module';
import { ActualizacionEventoModule } from './actualizaciones-evento/actualizacion-evento.module';
import { UbicacionModule } from './ubicaciones/ubicacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UsuariosModule,
    RolModule,
    PermisoModule,
    ServicioModule,
    EventoModule,
    InventarioModule,
    PersonalModule,
    NotificacionModule,
    ActualizacionEventoModule,
    UbicacionModule,
  ],
})
export class AppModule {}