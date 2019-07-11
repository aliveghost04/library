
exports.up = function(knex) {
  return knex.schema
    .table('books_authors', (table) => {
      table
        .foreign('book_id')
        .references('id')
        .inTable('books');
      table
        .foreign('author_id')
        .references('id')
        .inTable('authors');
    });
};

exports.down = function(knex) {
  return knex.schema
    .table('books_authors', (table) => {
      table.dropForeign('book_id');
      table.dropForeign('author_id');
    });
};
