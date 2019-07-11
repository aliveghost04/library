
exports.up = function(knex) {
  return knex.schema
    .table('authors_images', (table) => {
      table
        .foreign('author_id')
        .references('id')
        .inTable('authors');
    });
};

exports.down = function(knex) {
  return knex.schema
    .table('authors_images', (table) => {
      table.dropForeign('author_id');
    });
};
