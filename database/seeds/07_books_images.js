
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_images').insert([
        {
          id: 1,
          book_id: 4,
          name: 'El lado falso',
          url: 'https://imagessl0.casadellibro.com/a/l/t5/60/7506144901560.jpg',
          type: 'cover',
          size: '229x359',
        },
        {
          id: 2,
          book_id: 3,
          name: 'Mysticism and Logic and Other Essays ebook by Bertrand Russell',
          url: 'https://kbimages1-a.akamaihd.net/736b63e3-86cf-441c-8c43-09d66c81e350/353/569/90/False/mysticism-and-logic-and-other-essays-22.jpg',
          type: 'cover',
          size: '353x471',
        },
        {
          id: 3,
          book_id: 2,
          name: 'Elements of Logic ebook by Richard Whately',
          url: 'https://kbimages1-a.akamaihd.net/7f3bb247-5cec-4237-8a71-0503e1bdd747/353/569/90/False/elements-of-logic-13.jpg',
          type: 'cover',
          size: '353x508',
        },
        {
          id: 4,
          book_id: 1,
          name: 'Science and the Modern World: Whitehead, Alfred North',
          url: 'https://pictures.abebooks.com/11116758/22495249115.jpg',
          type: 'cover',
          size: '386x600',
        },
      ]);
    });
};
