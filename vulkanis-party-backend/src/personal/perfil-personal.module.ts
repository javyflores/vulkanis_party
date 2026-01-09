// src/personal/perfil-personal.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilPersonal } from './entities/perfil-personal.entity';
import { PerfilPersonalService } from './perfil-personal.service';
import { PerfilPersonalController } from './perfil-personal.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilPersonal])],
  providers: [PerfilPersonalService],
  controllers: [PerfilPersonalController],
})
export class PersonalModule {}