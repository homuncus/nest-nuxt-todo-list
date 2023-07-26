import { PartialType } from '@nestjs/mapped-types';
import { SignInDto } from './sign-in.dto';

export class SignUpDto extends PartialType(SignInDto) {
  confirm: string;
}
