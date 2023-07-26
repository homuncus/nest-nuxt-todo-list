import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'todos' })
export class Todo extends Model {
  @Column
  name: string;

  @Column({ defaultValue: false })
  completed: boolean;
}
