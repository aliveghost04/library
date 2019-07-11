
exports.up = function(knex) {
  return knex.schema
    .table('books_images', (table) => {
      table
        .foreign('book_id')
        .references('id')
        .inTable('books');
    });
};

exports.down = function(knex) {
  return knex.schema
    .table('books_images', (table) => {
      table.dropForeign('book_id');
    });
};
