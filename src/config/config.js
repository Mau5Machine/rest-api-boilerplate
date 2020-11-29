require('dotenv/config');
module.exports = {
  development: {
    databases: {
      rest: {
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASS,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
      },
    },
  },
  production: {
    databases: {
      rest: {
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASS,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
      },
    },
  },
};
