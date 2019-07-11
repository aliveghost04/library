
exports.up = function(knex) {
  return knex.schema
    .createTable('authors_images', (table) => {
      table.increments('id');
      table.integer('author_id').unsigned().notNullable();
      table.string('name', 100).notNullable();
      table.string('url').notNullable();
      table.string('size', 25).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('authors_images');
};
