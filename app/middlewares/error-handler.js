'use strict';

const ServerError = require('../errors/server-errors');

module.exports = (req, res, next) => {
    next(ServerError.NOT_FOUND);
};
