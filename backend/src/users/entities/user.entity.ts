import { Table, Column, Model, BeforeCreate } from 'sequelize-typescript';
import { Hooks } from 'sequelize/types/hooks';
import { hash } from 'bcrypt';

@Table({ tableName: 'users' })
export class User extends Model implements Hooks {
  @Column({ unique: true })
  username: string;

  @Column
  password: string;

  @BeforeCreate
  static async hashPassword(instance: User) {
    instance.password = await hash(instance.password, 10);
  }
}
