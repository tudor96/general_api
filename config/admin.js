module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e2786131305ceca5ac5512f581a3ebc'),
  },
});
