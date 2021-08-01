// next.config.js

const { SERVICE_ID, TEMPLATE_ID, USER_ID } = process.env;

const env = {
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
};

module.exports = { reactStrictMode: true, env };
