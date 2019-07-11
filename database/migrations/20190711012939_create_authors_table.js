
exports.up = function(knex) {
  return knex.schema
    .createTable('authors', (table) => {
      table.increments('id');
      table.string('name', 100).notNullable();
      table.date('birhdate').notNullable();
      table.string('birh_place').nullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('authors');
};
