'use strict';

const ServerError = require('../errors/server');
const Logger = require('../services/logger');

module.exports = (error, req, res, next) => {
  // Log all errors
  Logger.error(error);

  let err;

  if (error.type) {
    err = error;
  } else {
    err = new ServerError.Error();
  }

  res.status(err.statusCode || 500);
  res.json(err);
};
