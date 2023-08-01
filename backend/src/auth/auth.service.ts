import { UsersService } from '@/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({ username, password: pass }: SignInDto): Promise<any> {
    const user = await this.usersService.findBy('username', username)[0];
    if (!(await compare(user.password, pass))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async check(token: string) {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.get('Authorization').split(' ') ?? [];
    return type.toLowerCase() === 'bearer' ? token : undefined;
  }

  // async signUp({ username, password, confirm }: SignUpDto): Promise<any> {
  //   // TODO: Registration
  // }
}
