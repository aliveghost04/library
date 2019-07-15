'use strict';

module.exports = (req, res, next) => {
  req.paginateOptions = {
    perPage: Number(req.query.perPage) || 20,
    offset: Number(req.query.offset) || 0,
  };
  next();
}
