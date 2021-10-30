module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  password: env('APP_PASSWORD', ''),
  port: env.int('NODE_PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', ''),
    },
  },
});
