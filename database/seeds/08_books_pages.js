
function removeBreakLine(strings, ...values) {
  return values.join('').replace(/\n/gi, '');
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books_pages').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_pages').insert([
        {
          book_id: 1,
          page_number: 1,
          content: require('./science-and-the-modern-world/text/1'),
          format: 'text',
        },
        {
          book_id: 1,
          page_number: 2,
          content: require('./science-and-the-modern-world/text/2'),
          format: 'text',
        },
        {
          book_id: 1,
          page_number: 3,
          content: require('./science-and-the-modern-world/text/3'),
          format: 'text',
        },
        {
          book_id: 2,
          page_number: 1,
          content: require('./elements-of-logic/text/1'),
          format: 'text',
        },
        {
          book_id: 2,
          page_number: 2,
          content: require('./elements-of-logic/text/2'),
          format: 'text',
        },
        {
          book_id: 2,
          page_number: 3,
          content: require('./elements-of-logic/text/3'),
          format: 'text',
        },
        {
          book_id: 3,
          page_number: 1,
          content: require('./mysticism-and-logic-and-other-essays/text/1'),
          format: 'text',
        },
        {
          book_id: 3,
          page_number: 2,
          content: require('./mysticism-and-logic-and-other-essays/text/2'),
          format: 'text',
        },
        {
          book_id: 3,
          page_number: 3,
          content: require('./mysticism-and-logic-and-other-essays/text/3'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 1,
          content: require('./el-lado-oscuro/text/1'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 2,
          content: require('./el-lado-oscuro/text/2'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 3,
          content: require('./el-lado-oscuro/text/3'),
          format: 'text',
        },
        {
          book_id: 4,
          page_number: 4,
          content: require('./el-lado-oscuro/text/4'),
          format: 'text',
        },
        {
          book_id: 1,
          page_number: 1,
          content: removeBreakLine`${require('./science-and-the-modern-world/html/1')}`,
          format: 'html',
        },
        {
          book_id: 1,
          page_number: 2,
          content: removeBreakLine`${require('./science-and-the-modern-world/html/2')}`,
          format: 'html',
        },
        {
          book_id: 1,
          page_number: 3,
          content: removeBreakLine`${require('./science-and-the-modern-world/html/3')}`,
          format: 'html',
        },
        {
          book_id: 2,
          page_number: 1,
          content: removeBreakLine`${require('./elements-of-logic/html/1')}`,
          format: 'html',
        },
        {
          book_id: 2,
          page_number: 2,
          content: removeBreakLine`${require('./elements-of-logic/html/2')}`,
          format: 'html',
        },
        {
          book_id: 2,
          page_number: 3,
          content: removeBreakLine`${require('./elements-of-logic/html/3')}`,
          format: 'html',
        },
        {
          book_id: 3,
          page_number: 1,
          content: removeBreakLine`${require('./mysticism-and-logic-and-other-essays/html/1')}`,
          format: 'html',
        },
        {
          book_id: 3,
          page_number: 2,
          content: removeBreakLine`${require('./mysticism-and-logic-and-other-essays/html/2')}`,
          format: 'html',
        },
        {
          book_id: 3,
          page_number: 3,
          content: removeBreakLine`${require('./mysticism-and-logic-and-other-essays/html/3')}`,
          format: 'html',
        },
        {
          book_id: 4,
          page_number: 1,
          content: removeBreakLine`${require('./el-lado-oscuro/html/1')}`,
          format: 'html',
        },
        {
          book_id: 4,
          page_number: 2,
          content: removeBreakLine`${require('./el-lado-oscuro/html/2')}`,
          format: 'html',
        },
        {
          book_id: 4,
          page_number: 3,
          content: removeBreakLine`${require('./el-lado-oscuro/html/3')}`,
          format: 'html',
        },
        {
          book_id: 4,
          page_number: 4,
          content: removeBreakLine`${require('./el-lado-oscuro/html/4')}`,
          format: 'html',
        },
      ]);
    });
};
