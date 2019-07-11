
exports.up = function(knex) {
  return knex.schema
    .createTable('books_pages', (table) => {
      table.bigIncrements('id');
      table.bigInteger('book_id').unsigned().notNullable();
      table.integer('page_number');
      table.text('content', 'longtext');
      table.string('format');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('books_pages');
};
