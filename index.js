'use strict';

const express = require('express');
const app = express();

// Load configuration
require('./config');

// Load routes
const router = require('./routes');
app.use(
  process.env.APP_DEFAULT_MOUNTPOINT,
  router
);

// Listen for http request
app.listen(
  process.env.APP_PORT,
  process.env.APP_HOST,
  () => {
    console.log(`${process.env.APP_NAME} listening on ${process.env.APP_HOST}:${process.env.APP_PORT} at ${Date()}`);
  }
);
