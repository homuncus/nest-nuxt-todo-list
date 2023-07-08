import { SequelizeOptions } from 'sequelize-typescript';

export const options: SequelizeOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'nest_todolist',
};
