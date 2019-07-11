
exports.up = function(knex) {
  return knex.schema
    .createTable('books_images', (table) => {
      table.bigIncrements('id');
      table.bigInteger('book_id').unsigned().notNullable();
      table.string('name', 100).notNullable();
      table.string('url').notNullable();
      table.string('type', 50).notNullable();
      table.string('size', 25).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('books_images');
};
