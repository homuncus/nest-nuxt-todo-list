import { SequelizeOptions } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';

const { get } = new ConfigService();

export const options: SequelizeOptions = {
  dialect: get('DB_DIALECT', 'postgres'),
  host: get('DB_HOST', 'localhost'),
  port: get('DB_PORT', 5432),
  username: get('DB_USER', 'root'),
  password: get('DB_PASSWORD', 'root'),
  database: get('DB_DATABASE', 'todolist'),
};
