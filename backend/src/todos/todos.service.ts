import { Injectable, Inject } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import constants from '../constants';
import { FindOptions } from 'sequelize';

@Injectable()
export class TodosService {
  constructor(
    @Inject(constants.providers.Todo)
    private readonly todosModel: typeof Todo,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return new this.todosModel().setAttributes(createTodoDto).save();
  }

  findAll(params?: FindOptions<any>) {
    return this.todosModel.findAll(params);
  }

  findOne(id: number) {
    return this.todosModel.findOne({ where: { id } });
  }

  findBy(attr: string, value: number | string | boolean) {
    return this.todosModel.findOne({ where: { [attr]: value } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todosModel.findOne({ where: { id } });
    todo.setAttributes(updateTodoDto);
    return await todo.save();
  }

  remove(id: number) {
    return this.todosModel.destroy({ where: { id } });
  }
}
