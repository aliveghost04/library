'use strict';

const express = require('express');
const router = express.Router();
const NotFoundMiddleware = require('./app/middlewares/not-found');
const ErrorHandlerMiddleware = require('./app/middlewares/error-handler');

// Controllers


// Add here all the app routes

// End all app routes

// Not found and error handler middlewares
router.use(NotFoundMiddleware);
router.use(ErrorHandlerMiddleware);

module.exports = router;
