import constants from '../../constants';
import { Todo } from '../entities/todo.entity';
import { Provider } from '@nestjs/common';

export const todosProviders: Provider[] = [
  {
    provide: constants.providers.Todo,
    useValue: Todo,
  },
];
