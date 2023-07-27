import { SequelizeOptions } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { config as load } from 'dotenv';
load();

const config = new ConfigService();

export const options: SequelizeOptions = {
  dialect: config.get('DB_DIALECT', 'postgres'),
  host: config.get('DB_HOST', 'localhost'),
  port: config.get('DB_PORT', 5432),
  username: config.get('DB_USER', 'root'),
  password: config.get('DB_PASSWORD', 'root'),
  database: config.get('DB_DATABASE', 'todolist'),
};
