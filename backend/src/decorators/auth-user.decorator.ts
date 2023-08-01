import { User } from '@/users/entities/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Only to use in auth verified endpoints
export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as User;
  },
);
