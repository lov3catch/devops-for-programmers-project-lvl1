module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
          host: env('DATABASE_HOST', 'db'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'postgres'),
          username: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'example'),
          ssl: env('DATABASE_SSL', false)
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
