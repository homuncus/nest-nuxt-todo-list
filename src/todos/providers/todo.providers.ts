import constants from 'src/constants';
import { Todo } from '../entities/todo.entity';

export const todosProviders = [
  {
    provide: constants.providers.Todo,
    useValue: Todo,
  },
];
