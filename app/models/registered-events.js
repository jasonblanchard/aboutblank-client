import Ember from 'ember';

export default Ember.A([
    Ember.Object.create({
      name: 'goodreadsEvents',
      icon: 'icon-book',
      prefix: 'Started reading',
      label: "Goodreads Bookshelf"
    }),
    Ember.Object.create({
      name: 'deliciousEvents',
      icon: 'icon-delicious',
      prefix: 'Bookmarked',
      label: 'Delicious Bookmarks'
    })
  ]);
