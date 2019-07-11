
exports.up = function(knex) {
  return knex.schema
    .createTable('publishers', (table) => {
      table.increments('id');
      table.string('name', 100).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('publishers');
};
