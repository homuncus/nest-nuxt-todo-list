import { Sequelize } from 'sequelize-typescript';
import { Provider } from '@nestjs/common';
import constants from '../constants';
import { options } from './database.config';
import { Todo } from '../todos/entities/todo.entity';

export const databaseProviders: Provider[] = [
  {
    provide: constants.database.provider,
    useFactory: async () => {
      const sequelize = new Sequelize(options);
      sequelize.addModels([Todo]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
