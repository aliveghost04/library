'use strict';

const knexfile = require('../../../knexfile');

const knex = require('knex')({
  ...knexfile,
  pool: {
    min: 0,
    max: process.env.DB_MAX_POOL_CONNECTION,
  },
});

module.exports = knex;
