'use strict';

const express = require('express');
const router = express.Router();
const NotFoundMiddleware = require('./app/middlewares/not-found');
const ErrorHandlerMiddleware = require('./app/middlewares/error-handler');
const PaginateMiddleware = require('./app/middlewares/paginate');

// Controllers
const BookController = require('./app/controllers/book');

// Add here all the app routes

// books routes
router.get(
  '/book',
  [
    PaginateMiddleware,
  ],
  BookController.getAll
);

router.get('/book/:id', BookController.get);

// book pages routes
router.get('/book/:bookId/page/:pageNumber/:format?', BookController.getPage);

// End all app routes

// Not found and error handler middlewares
router.use(NotFoundMiddleware);
router.use(ErrorHandlerMiddleware);

module.exports = router;
