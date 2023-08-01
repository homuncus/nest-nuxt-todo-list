import { Table, Column, Model, BeforeCreate, HasMany } from 'sequelize-typescript';
import { Hooks } from 'sequelize/types/hooks';
import { hash } from 'bcrypt';
import { Todo } from '@/todos/entities/todo.entity';

@Table({ tableName: 'users' })
export class User extends Model implements Hooks {
  @Column({ unique: true })
  username: string;

  @Column
  password: string;

  @HasMany(() => Todo)
  todos: Todo[];

  @BeforeCreate
  static async hashPassword(instance: User) {
    instance.password = await hash(instance.password, 10);
  }
}
