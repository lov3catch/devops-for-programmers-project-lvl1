module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('POSTGRES_HOST', 'db'),
        port: env('POSTGRES_PORT', 5432),
        database: env('POSTGRES_DB', 'postgres'),
        username: env('POSTGRES_USER', 'postgres'),
        password: env('POSTGRES_PASSWORD', 'example'),
        ssl: env('POSTGRES_SQL', false)
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
