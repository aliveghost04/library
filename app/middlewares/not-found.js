'use strict';

const ServerError = require('../errors/server');

module.exports = (req, res, next) => {
    next(new ServerError.NotFound());
};
