import { type Todo as ITodo } from './todo.interface';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Todo extends Model implements ITodo {
  @Column({ primaryKey: true })
  id: number;

  @Column
  name: string;

  @Column({ defaultValue: false })
  completed: boolean;
}
