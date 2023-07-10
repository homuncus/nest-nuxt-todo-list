import { UsersService } from '@/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn({ username, password: pass }: SignInDto): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!(await compare(user.password, pass))) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  // async signUp({ username, password, confirm }: SignUpDto): Promise<any> {
  //   // TODO: Registration
  // }
}
