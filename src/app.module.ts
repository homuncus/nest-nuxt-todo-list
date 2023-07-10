import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, TodosModule, AuthModule, UsersModule],
})
export class AppModule {}
