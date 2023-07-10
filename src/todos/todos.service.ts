import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { ModelCtor } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo)
    private readonly todosModel: ModelCtor<Todo>,
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
