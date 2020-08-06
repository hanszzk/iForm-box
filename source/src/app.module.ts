import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule, AuthModule } from './core';
import { DATABASE_CONFIG } from './configs';

const {
  env: {
    DATABASE_HOST: host,
    DATABASE_PORT: port,
    DATABASE_NAME: database,
    DATABASE_USERNAME: username,
    DATABASE_PASSWORD: password,
  },
} = process;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      database: 'form_box',
      host: 'iformbox.com',
      password: 'postgres',
      port: parseInt(port, 10),
      synchronize: true,
      type: 'postgres',
      username: 'postgres',
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
