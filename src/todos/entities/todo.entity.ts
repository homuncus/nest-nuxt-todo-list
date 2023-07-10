import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class todo extends Model {
  @Column
  name: string;

  @Column
  completed: boolean;
}
