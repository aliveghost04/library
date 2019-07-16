'use strict';

const { queryBuilder, paginate } = require('../database');
const PopulateBooks = require('./populate');

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
    result.data = await PopulateBooks(result.data);

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
      const booksPopulated = await PopulateBooks([ book ]);
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
