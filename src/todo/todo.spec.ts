import { Todo } from './todo.model';

describe('Todo', () => {
  it('should be defined', () => {
    expect(new Todo()).toBeDefined();
  });
});
