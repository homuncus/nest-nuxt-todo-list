import constants from '@/constants';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(constants.providers.User)
    private readonly usersModel: typeof User,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersModel.findOne({ where: { username } });
  }

  create(createUserDto: CreateUserDto) {
    return new this.usersModel().setAttributes(createUserDto).save();
  }

  async update(id: number | string, updateUserDto: UpdateUserDto) {
    const user = await this.usersModel.findOne({ where: { id } });
    user.setAttributes(updateUserDto);
    return user.save();
  }

  // async checkPass(user: User, password: string): Promise<boolean> {
  //   return compare(user.password, password);
  // }
}
