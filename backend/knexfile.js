// Update with your config settings.
// knex init
// knex migrate:make create_table_users
// knex_migrations para controlar as migrações

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'app_music',
    user: 'postgres',
    password: '170600'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
