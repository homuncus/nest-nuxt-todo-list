import { Sequelize } from 'sequelize-typescript';
import constants from 'src/constants';
import { options } from './database.config';
import { Todo } from '../todos/entities/todo.entity';

export const databaseProviders = [
  {
    provide: constants.database.provider,
    useFactory: async () => {
      const sequelize = new Sequelize(options);
      sequelize.addModels([Todo]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
