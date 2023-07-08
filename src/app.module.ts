import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TodoModule],
})
export class AppModule {}
