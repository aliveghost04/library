
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors_images').insert([
        {
          id: 1,
          name: 'Sally Green',
          url: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/24/1395686764172/Sally-Green--008.jpg?width=300&quality=85&auto=format&fit=max&s=a49a866b818ff811723c10de87eb8e1d',
          size: '300x180',
          author_id: 1
        },
        {
          id: 2,
          name: 'Alfred North Whitehead',
          url: 'https://www.biografiasyvidas.com/biografia/w/fotos/whitehead_alfred.jpg',
          size: '340x340',
          author_id: 2
        },
        {
          id: 3,
          name: 'Johann Wolfgang Von Goethe',
          url: 'http://www.psicologiadelcolor.es/wp-content/uploads/2016/10/johann-wolfgang-von-goethe-232x300.jpg',
          size: '232x300',
          author_id: 3
        },
        {
          id: 4,
          name: 'Duentzer, Heinrich',
          url: 'https://c8.alamy.com/comp/X40DK9/duentzer-heinrich-1271813-16121901-german-philologist-wood-engraving-oval-librarian-literature-historian-duntzer-X40DK9.jpg',
          size: '995x1390',
          author_id: 4
        },
        {
          id: 5,
          name: 'Bertrand Russell en 1936',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bertrand_Russell_photo.jpg/256px-Bertrand_Russell_photo.jpg',
          size: '256x202',
          author_id: 5
        },
      ]);
    });
};
