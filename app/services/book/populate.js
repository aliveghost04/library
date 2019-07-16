'use strict';

const { queryBuilder } = require('../database');

const PopulateBooks = async (booksToPopulate) => {
  if (!Array.isArray(booksToPopulate)) {
    throw new Error('Books to populate aren\'t an array');
  }

  const books = [
    ...booksToPopulate,
  ];

  // Get books ids
  const booksIds = books.map(book => book.id);

  const authorsIds = [];
  // Retrieve the books authors
  const booksAuthors = await queryBuilder('books_authors as ba')
    .select({
      id: 'a.id',
      name: 'a.name',
      birthDate: 'a.birthdate',
      birthPlace: 'a.birth_place',
      bookId: 'ba.book_id',
    })
    .join('authors as a', 'a.id', 'ba.author_id')
    .whereIn('ba.book_id', booksIds)
    .reduce((accumulator, bookAuthor) => {
      if (!accumulator[bookAuthor.bookId]) {
        accumulator[bookAuthor.bookId] = [];
      }

      accumulator[bookAuthor.bookId].push(bookAuthor);
      delete bookAuthor.bookId;
      authorsIds.push(bookAuthor.id);
      return accumulator;
    }, {});

  // Retrieve authors images
  const authorsImages = await queryBuilder('authors_images')
    .select({
      id: 'id',
      authorId: 'author_id',
      url: 'url',
      size: 'size',
    })
    .whereIn('author_id', authorsIds)
    .reduce((accumulator, authorImage) => {
      if (!accumulator[authorImage.authorId]) {
        accumulator[authorImage.authorId] = [];
      }

      accumulator[authorImage.authorId].push(authorImage);
      delete authorImage.authorId;
      return accumulator;
    }, {});

  // Retrieve books images
  const booksImages = await queryBuilder('books_images')
    .select({
      id: 'id',
      bookId: 'book_id',
      url: 'url',
      type: 'type',
      size: 'size',
    })
    .where('type', 'cover')
    .whereIn('book_id', booksIds)
    .reduce((accumulator, bookImage) => {
      if (!accumulator[bookImage.bookId]) {
        accumulator[bookImage.bookId] = [];
      }

      accumulator[bookImage.bookId].push(bookImage);
      delete bookImage.bookId;
      return accumulator;
    }, {});

  // Retrieve available books formats
  const bookFormats = await queryBuilder('books_pages')
    .select({
      bookId: 'book_id',
      format: 'format',
    })
    .groupBy('format')
    .groupBy('book_id')
    .whereIn('book_id', booksIds)
    .reduce((accumulator, bookFormat) => {
      if (!accumulator[bookFormat.bookId]) {
        accumulator[bookFormat.bookId] = [];
      }

      accumulator[bookFormat.bookId].push(bookFormat.format);
      return accumulator;
    }, {})

  // Add authors with its images, available formats and books images
  return books.map((book) => {
    if (booksAuthors[book.id]) {
      book.authors = booksAuthors[book.id];
    } else {
      book.authors = [];
    }

    book.authors = book.authors.map((author) => {
      author.images = authorsImages[author.id];
      return author;
    });

    book.images = booksImages[book.id] || [];
    book.formats = bookFormats[book.id] || [];

    return book;
  });
};

module.exports = PopulateBooks;
