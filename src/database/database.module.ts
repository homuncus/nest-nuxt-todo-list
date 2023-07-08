import { Module } from '@nestjs/common';
import { options } from './database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from '../todo/todo.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...options,
      models: [Todo],
    }),
  ],
})
export class DatabaseModule {}
