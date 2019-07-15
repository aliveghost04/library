'use strict';

const knexfile = require('../../../knexfile');
const paginate = require('./paginate');

const maxConnections = Number(process.env.DB_MAX_POOL_CONNECTION);

const knex = require('knex')({
  ...knexfile,
  pool: {
    min: 0,
    max: maxConnections,
  },
});

const DatabaseService = {
  paginate,
  queryBuilder: knex,
};

module.exports = DatabaseService;
