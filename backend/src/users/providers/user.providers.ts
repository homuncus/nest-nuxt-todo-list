import constants from '../../constants';
import { User } from '../entities/user.entity';
import { Provider } from '@nestjs/common';

export const usersProviders: Provider[] = [
  {
    provide: constants.providers.User,
    useValue: User,
  },
];
