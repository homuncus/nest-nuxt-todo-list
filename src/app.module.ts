import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AuthModule,
    UsersModule,
    TodosModule,
  ],
})
export class AppModule {}
