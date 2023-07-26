import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './providers/user.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService, ...usersProviders],
})
export class UsersModule {}
