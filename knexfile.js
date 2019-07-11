'use strict';

// Load environment variables
require('./config');

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: './database/migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
};
