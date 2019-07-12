
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {id: 1, name: 'G. Allen & Unwin'},
        {id: 2, name: 'J. Munroe and Co'},
        {id: 3, name: 'Océano Gran Travería'},
        {id: 4, name: 'Cambridge : University Press'},
      ]);
    });
};
