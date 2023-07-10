import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { todosProviders } from './providers/todo.providers';
import { TodosModule } from './todos.module';

describe('TodosController', () => {
  let todoController: TodosController;
  let todo: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodosModule],
      controllers: [TodosController],
      providers: [TodosService, ...todosProviders],
    }).compile();

    todoController = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(todoController).toBeDefined();
  });

  it('should create a todo', async () => {
    todo = await todoController.create({ name: 'test todo' });
    expect(todo).toHaveProperty('name', 'test todo');
    expect(todo).toHaveProperty('completed', false);
  });

  it('should be able to update the todo', async () => {
    expect(
      await todoController.update(todo.id, { completed: true }),
    ).toBeTruthy();
  });

  it('should be able to delete the todo', async () => {
    expect(await todoController.remove(todo.id)).toBeTruthy();
  });
});
