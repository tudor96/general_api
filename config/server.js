module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 4023),
  settings: {
    cors: {
      origin: ["*"], //allow all origins
      headers: ["*"], //allow all headers
    },
  },
});
