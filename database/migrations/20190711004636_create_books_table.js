
exports.up = function(knex) {
  return knex.schema
    .createTable('books', (table) => {
      table.bigIncrements('id');
      table.string('name', 150).notNullable();
      table.string('isbn', 50).unique().notNullable();
      table.date('publish_date').notNullable();
      table.string('publish_place', 100).notNullable();
      table.integer('classification_id').unsigned().notNullable();
      table.integer('page_quantity').notNullable();
      table.integer('publisher_id').unsigned().notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('books');
};
