export default {
  database: {
    provider: 'SEQUELIZE',
  },
  providers: {
    Todo: 'TODOS_REPOSITORY',
    User: 'USERS_REPOSITORY',
  },
};
