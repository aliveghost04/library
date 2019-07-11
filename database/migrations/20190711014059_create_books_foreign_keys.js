
exports.up = function(knex) {
  return knex.schema
    .table('books', (table) => {
      table
        .foreign('classification_id')
        .references('id')
        .inTable('classifications');
      table
        .foreign('publisher_id')
        .references('id')
        .inTable('publishers');
    });
};

exports.down = function(knex) {
  return knex.schema
    .table('books', (table) => {
      table.dropForeign('publisher_id');
      table.dropForeign('classification_id');
    });
};
