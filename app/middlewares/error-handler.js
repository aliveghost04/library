'use strict';

const ServerError = require('../errors/server-errors');
const Logger = require('../services/logger');

module.exports = (error, req, res, next) => {
  // Log all errors
  Logger.error(error);

  let err;

  if (error.type) {
    err = error;
  } else {
    err = ServerError.ERROR;
  }

  res.status(err.statusCode || 500);
  res.json(err);
};
