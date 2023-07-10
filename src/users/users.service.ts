import constants from '@/constants';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(constants.providers.User)
    private readonly usersModel: typeof User,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersModel.findOne({ where: { username } });
  }

  // async checkPass(user: User, password: string): Promise<boolean> {
  //   return compare(user.password, password);
  // }
}
