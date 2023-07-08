import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  async add(todo: Todo): Promise<void> {
    const obj = new this.todoModel();
    obj.setAttributes(todo);
    await obj.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  async findBy(attr: string, value: string): Promise<Todo[]> {
    return this.todoModel.findAll({
      where: {
        [attr]: value,
      },
    });
  }

  findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const todo = await this.findOne(id);
    await todo.destroy();
  }
}
