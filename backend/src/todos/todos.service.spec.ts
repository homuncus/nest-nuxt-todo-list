import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { todosProviders } from './providers/todo.providers';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService, ...todosProviders],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
