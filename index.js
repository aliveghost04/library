'use strict';

const express = require('express');
const app = express();
const NotFoundMiddleware = require('./app/middlewares/not-found');
const ErrorHandlerMiddleware = require('./app/middlewares/error-handler');

// Load configuration
require('./config');

// Trust Proxy
if (process.env.APP_TRUST_PROXY) {
  app.enable('trust proxy');
}

// Load routes
const router = require('./routes');
app.use(
  process.env.APP_DEFAULT_MOUNTPOINT,
  router
);

// Not found and error handler middlewares
app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

// Listen for http request
app.listen(
  process.env.APP_PORT,
  process.env.APP_HOST,
  () => {
    console.log(`${process.env.APP_NAME} listening on ${process.env.APP_HOST}:${process.env.APP_PORT} at ${Date()}`);
  }
);
