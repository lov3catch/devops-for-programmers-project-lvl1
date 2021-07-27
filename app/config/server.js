module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  url: 'http://hxlt.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b263b572c8ca1d02bb9a656251fff01f'),
    },
  },
});
