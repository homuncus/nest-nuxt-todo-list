import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column
  name: string;

  @Column
  completed: boolean;
}
