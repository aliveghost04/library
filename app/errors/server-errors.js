'use strict';

const TypedError = require('error/typed');

const ERROR = TypedError({
  type: 'Server',
  message: 'Something unexpected just happened. Please try again later.',
  statusCode: 500,
});

const NOT_FOUND = TypedError({
  type: 'NotFound',
  message: 'The resource requested cannot be found',
  statusCode: 404,
});

module.exports = {
  ERROR: ERROR(),
  NOT_FOUND: NOT_FOUND(),
};
