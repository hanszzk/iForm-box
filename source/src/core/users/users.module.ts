import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity, RoleEntity, MenusEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RoleEntity, MenusEntity])
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
