
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts books
      return knex('books').insert([
        {
          id: 1,
          name: 'Science and the modern world',
          isbn: '20171220130135',
          publish_date: '1926',
          publish_place: 'Great Britain',
          classification_id: 3,
          page_quantity: 290,
          publisher_id: 4,
        },
        {
          id: 2,
          name: 'Elements of Logic',
          isbn: '20060822134558',
          publish_date: '1859',
          publish_place: 'Boston',
          classification_id: 2,
          page_quantity: 498,
          publisher_id: 2,
        },
        {
          id: 3,
          name: 'Mysticism and logic and other essays',
          isbn: '20060823223303',
          publish_date: '1917',
          publish_place: 'London',
          classification_id: 1,
          page_quantity: 260,
          publisher_id: 1,
        },
        {
          id: 4,
          name: 'EL LADO FALSO',
          isbn: '7506144901560',
          publish_date: '2015',
          publish_place: 'España',
          classification_id: 4,
          page_quantity: 120,
          publisher_id: 3,
        },
      ]);
    });
};
