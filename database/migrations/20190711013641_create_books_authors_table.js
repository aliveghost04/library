
exports.up = function(knex) {
  return knex.schema
    .createTable('books_authors', (table) => {
      table.bigIncrements('id');
      table.bigInteger('book_id').unsigned().notNullable();
      table.integer('author_id').unsigned().notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('books_authors');
};
