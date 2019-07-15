'use strict';

const should = require('should');

const BookService = require('../../app/services/book');

describe('BookService', function () {
  it('should get all books paginated', async function () {
    const perPage = 1;
    const offset = 0;

    const books = await BookService.find({}, {
      perPage,
      offset,
    });

    should(books).be.an.Object().and.have.properties([
      'data',
      'paginate',
    ]);

    should(books.data).be.an.Array();
    should(books.paginate).be.an.Object().and.have.properties([
      'total',
      'offset',
      'perPage',
    ]);

    should(books.paginate.total).be.a.Number().and.be.equal(4);
    should(books.paginate.offset).be.a.Number().and.be.equal(offset);
    should(books.paginate.perPage).be.a.Number().and.be.equal(perPage);

    books.data.forEach((book) => {
      should(book).be.an.Object().and.have.properties([
        'id',
        'name',
        'isbn',
        'publishDate',
        'publishPlace',
        'classification',
        'pageQuantity',
        'publisher',
        'authors',
        'images',
        'formats',
      ]);

      should(book.id).be.a.Number();
      should(book.name).be.a.String();
      should(book.isbn).be.a.String();
      should(book.publishDate).be.a.String().and.have.length(4);
      should(book.publishPlace).be.a.String();
      should(book.classification).be.a.String();
      should(book.pageQuantity).be.a.Number();
      should(book.publisher).be.a.String();
      should(book.authors).be.a.Array();
      should(book.images).be.a.Array();
      should(book.formats).be.a.Array();
    });
  });

  it('should get a book', async function () {
    const book = await BookService.get(1);

    should(book).be.an.Object().and.have.properties([
      'id',
      'name',
      'isbn',
      'publishDate',
      'publishPlace',
      'classification',
      'pageQuantity',
      'publisher',
      'authors',
      'images',
      'formats',
    ]);

    should(book.id).be.a.Number();
    should(book.name).be.a.String();
    should(book.isbn).be.a.String();
    should(book.publishDate).be.a.String().and.have.length(4);
    should(book.publishPlace).be.a.String();
    should(book.classification).be.a.String();
    should(book.pageQuantity).be.a.Number();
    should(book.publisher).be.a.String();
    should(book.authors).be.a.Array();
    should(book.images).be.a.Array();
    should(book.formats).be.a.Array();
  });

  it('should get a book page in text format', async function () {
    const bookPage = await BookService.getPage(1, 1, 'text');

    should(bookPage).be.an.Object().and.have.properties([
      'content',
    ]);
    should(bookPage.content).not.be.empty();
  });

  it('should get a book page in html format', async function () {
    const bookPage = await BookService.getPage(1, 1, 'html');

    should(bookPage).be.an.Object().and.have.properties([
      'content',
    ]);
    should(bookPage.content).not.be.empty();
    /\<div\>/.test(bookPage.content).should.be.true();
  });
});
