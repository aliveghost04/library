'use strict';

const BookService = require('../services/book');
const BookError = require('../errors/book');

const BookController = {
  async getAll(req, res, next) {
    try {
      const books = await BookService.find(
        req.query,
        req.paginateOptions
      );

      res.json(books);
    } catch (error) {
      next(error);
    }
  },
  async get(req, res, next) {
    try {
      const book = await BookService.get(req.params.id);

      if (!book) {
        throw new BookError.NotFound();
      }

      res.json(book);
    } catch (error) {
      next(error);
    }
  },
  async getPage(req, res, next) {
    try {
      if (!req.params.format) {
        throw new BookError.FormatRequired();
      }

      const page = await BookService.getPage(
        req.params.bookId,
        req.params.pageNumber,
        req.params.format
      );

      if (!page) {
        throw new BookError.PageNotFound();
      }

      res.json(page);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = BookController;
