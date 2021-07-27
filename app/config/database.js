module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
          host: 'db',
          port: 5432,
          database: 'dev',
          username: 'dev',
          password: 'password',
          ssl: env('DATABASE_SSL', false)
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
