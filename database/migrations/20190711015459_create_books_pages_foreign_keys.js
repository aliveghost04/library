
exports.up = function(knex) {
  return knex.schema
    .table('books_pages', (table) => {
      table
        .foreign('book_id')
        .references('id')
        .inTable('books');
    });
};

exports.down = function(knex) {
  return knex.schema
    .table('books_pages', (table) => {
      table.dropForeign('book_id');
    });
};
