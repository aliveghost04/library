
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books_authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_authors').insert([
        {
          id: 1,
          book_id: 1,
          author_id: 2,
        },
        {
          id: 2,
          book_id: 2,
          author_id: 3,
        },
        {
          id: 3,
          book_id: 2,
          author_id: 4,
        },
        {
          id: 4,
          book_id: 3,
          author_id: 5,
        },
        {
          id: 5,
          book_id: 4,
          author_id: 1,
        },
      ]);
    });
};
