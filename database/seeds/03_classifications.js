
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('classifications').insert([
        {id: 1, name: 'Philosophy'},
        {id: 2, name: 'Art'},
        {id: 3, name: 'Science'},
        {id: 4, name: 'Romance'},
      ]);
    });
};
