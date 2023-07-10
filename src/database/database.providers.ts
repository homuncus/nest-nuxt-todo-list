import { Sequelize } from 'sequelize-typescript';
import constants from 'src/constants';
import { options } from './database.config';
import { todo } from '../todos/entities/todo.entity';

export const databaseProviders = [
  {
    provide: constants.database.provider,
    useFactory: async () => {
      const sequelize = new Sequelize(options);
      sequelize.addModels([todo]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
