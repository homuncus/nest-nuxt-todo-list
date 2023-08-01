import { User } from '@/users/entities/user.entity';
import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'todos' })
export class Todo extends Model {
  @Column
  name: string;

  @Column({ defaultValue: false })
  completed: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
