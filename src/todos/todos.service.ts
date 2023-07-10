import { Injectable, Inject } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { todo } from './entities/todo.entity';
import constants from 'src/constants';

@Injectable()
export class TodosService {
  constructor(
    @Inject(constants.providers.Todo)
    private readonly todosModel: typeof todo,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = new this.todosModel();
    todo.setAttributes(createTodoDto);
    return await todo.save();
  }

  async findAll() {
    return await this.todosModel.findAll();
  }

  async findOne(id: number) {
    return await this.todosModel.findOne({ where: { id } });
  }

  async findBy(attr: string, value: number | string | boolean) {
    return await this.todosModel.findOne({ where: { [attr]: value } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todosModel.findOne({ where: { id } });
    todo.setAttributes(updateTodoDto);
    return await todo.save();
  }

  async remove(id: number) {
    return await this.todosModel.destroy({ where: { id } });
  }
}
