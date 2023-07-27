import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './providers/user.providers';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService, ...usersProviders],
  controllers: [UsersController],
})
export class UsersModule {}
