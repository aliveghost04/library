'use strict';

const { queryBuilder, paginate } = require('../database');

const populateBooks = async (booksToPopulate) => {
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
    .reduce((b, a) => {
      if (!b[a.bookId]) {
        b[a.bookId] = [];
      }

      b[a.bookId].push(a);
      delete a.bookId;
      authorsIds.push(a.id);
      return b;
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
    .reduce((b, a) => {
      if (!b[a.authorId]) {
        b[a.authorId] = [];
      }

      b[a.authorId].push(a);
      delete a.authorId;
      return b;
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
    .reduce((b, a) => {
      if (!b[a.bookId]) {
        b[a.bookId] = [];
      }

      b[a.bookId].push(a);
      delete a.bookId;
      return b;
    }, {});

  const bookFormats = await queryBuilder('books_pages')
    .select({
      bookId: 'book_id',
      format: 'format',
    })
    .groupBy('format')
    .groupBy('book_id')
    .whereIn('book_id', booksIds)
    .reduce((b, a) => {
      if (!b[a.bookId]) {
        b[a.bookId] = [];
      }

      b[a.bookId].push(a.format);
      return b;
    }, {})

  // Add authors with its images, available formats and books images
  books.forEach((book) => {
    if (booksAuthors[book.id]) {
      book.authors = booksAuthors[book.id];
    } else {
      book.authors = [];
    }

    book.authors.forEach((author) => {
      author.images = authorsImages[author.id];
    });

    book.images = booksImages[book.id] || [];
    book.formats = bookFormats[book.id] || [];
  });

  return books;
};

const BookService = {
  async find(filters, paginateOptions) {
    // Build query to retrieve books
    const query = queryBuilder('books as b')
      .select({
        id: 'b.id',
        name: 'b.name',
        isbn: 'b.isbn',
        publishDate: 'b.publish_date',
        publishPlace: 'b.publish_place',
        classification: 'c.name',
        pageQuantity: 'b.page_quantity',
        publisher: 'p.name',
      })
      .join('classifications as c', 'b.classification_id', 'c.id')
      .join('publishers as p', 'b.publisher_id', 'p.id');

    // Applying filters
    if (filters.isbn) {
      query.where('b.isbn', 'like', `%${filters.isbn}%`);
    }

    if (filters.name) {
      query.where('b.name', 'like', `%${filters.name}%`);
    }

    if (filters.classification) {
      query.where('b.classification_id', filters.classification);
    }
    // End applying filter

    // Return results paginated
    const result = await paginate(query, paginateOptions)

    // Populate books fields
    result.data = await populateBooks(result.data);

    return result;
  },
  async get(id) {
    // Retrieve the book by ID
    const book = await queryBuilder('books as b')
      .select({
        id: 'b.id',
        name: 'b.name',
        isbn: 'b.isbn',
        publishDate: 'b.publish_date',
        publishPlace: 'b.publish_place',
        classification: 'c.name',
        pageQuantity: 'b.page_quantity',
        publisher: 'p.name',
      })
      .where('b.id', id)
      .join('classifications as c', 'b.classification_id', 'c.id')
      .join('publishers as p', 'b.publisher_id', 'p.id')
      .first();

    if (book) {
      const booksPopulated = await populateBooks([ book ]);
      return booksPopulated[0];
    } else {
      return null;
    }
  },
  async getPage(bookId, pageNumber, format) {
    return queryBuilder('books_pages')
      .select('content')
      .where({
        format,
        'book_id': bookId,
        'page_number': pageNumber,
      })
      .first();
  },
};

module.exports = BookService;
