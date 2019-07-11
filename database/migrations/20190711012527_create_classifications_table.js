
exports.up = function(knex) {
  return knex.schema
    .createTable('classifications', (table) => {
      table.increments('id');
      table.string('name', 100).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('classifications');
};
