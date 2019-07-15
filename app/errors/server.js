'use strict';

const TypedError = require('error/typed');

module.exports = {
  Error: TypedError({
    type: 'Server',
    message: 'Something unexpected just happened. Please try again later.',
    statusCode: 500,
  }),
  NotFound: TypedError({
    type: 'NotFound',
    message: 'The resource requested cannot be found',
    statusCode: 404,
  }),
};
