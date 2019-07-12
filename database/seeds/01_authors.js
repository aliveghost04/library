
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books_images').del()
    .then(() => knex('books_authors').del())
    .then(() => knex('books_pages').del())
    .then(() => knex('books').del())
    .then(() => knex('authors_images').del())
    .then(() => knex('authors').del())
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {
          id: 1,
          name: 'Sally Green',
          birthdate: '1979-03-10',
          birth_place: 'England'
        },
        {
          id: 2,
          name: 'Alfred North Whitehead',
          birthdate: '1861-05-12',
          birth_place: 'United States'
        },
        {
          id: 3,
          name: 'Whately, Richard',
          birthdate: '1787-01-25',
          birth_place: 'United States'
        },
        {
          id: 4,
          name: 'Düntzer, Heinrich',
          birthdate: '1813-06-04',
          birth_place: 'Germany'
        },
        {
          id: 5,
          name: 'Russell, Bertrand',
          birthdate: '1872-09-19',
          birth_place: 'London'
        },
      ]);
    });
};
