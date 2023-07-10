import constants from 'src/constants';
import { todo } from '../entities/todo.entity';

export const todosProviders = [
  {
    provide: constants.providers.Todo,
    useValue: todo,
  },
];
