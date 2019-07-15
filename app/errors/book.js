'use strict';

const TypedError = require('error/typed');

module.exports = {
  NotFound: TypedError({
    type: 'Book',
    message: 'Book not found',
    statusCode: 404,
  }),
  PageNotFound: TypedError({
    type: 'Book',
    message: 'Book page not found in the required format',
    statusCode: 404,
  }),
  FormatRequired: TypedError({
    type: 'Book',
    message: 'Need to specify the required book page format',
    statusCode: 422,
  }),
};
