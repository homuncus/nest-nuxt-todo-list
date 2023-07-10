import { SequelizeOptions } from 'sequelize-typescript';

export const options: SequelizeOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kostyadb',
  password: '1488',
  database: 'nest_todolist',
};
