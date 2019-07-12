
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books_pages').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_pages').insert([
        {
          book_id: 1,
          page_number: 1,
          content: require('./science-and-the-modern-world/1'),
          format: 'text',
        },
        {
          book_id: 1,
          page_number: 2,
          content: require('./science-and-the-modern-world/2'),
          format: 'text',
        },
        {
          book_id: 1,
          page_number: 3,
          content: require('./science-and-the-modern-world/3'),
          format: 'text',
        },
        {
          book_id: 2,
          page_number: 1,
          content: require('./elements-of-logic/1'),
          format: 'text',
        },
        {
          book_id: 2,
          page_number: 2,
          content: require('./elements-of-logic/2'),
          format: 'text',
        },
        {
          book_id: 2,
          page_number: 3,
          content: require('./elements-of-logic/3'),
          format: 'text',
        },
        {
          book_id: 3,
          page_number: 1,
          content: require('./mysticism-and-logic-and-other-essays/1'),
          format: 'text',
        },
        {
          book_id: 3,
          page_number: 2,
          content: require('./mysticism-and-logic-and-other-essays/2'),
          format: 'text',
        },
        {
          book_id: 3,
          page_number: 3,
          content: require('./mysticism-and-logic-and-other-essays/3'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 1,
          content: require('./el-lado-oscuro/1'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 2,
          content: require('./el-lado-oscuro/2'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 3,
          content: require('./el-lado-oscuro/3'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 4,
          content: require('./el-lado-oscuro/4'),
          format: 'text',
        },
      ]);
    });
};
