import Ember from 'ember';

export default Ember.A([
    Ember.Object.create({
      name: 'goodreadsEvent',
      pluralName: 'goodreadsEvents',
      icon: 'icon-book',
      prefix: 'Started reading',
      label: "Goodreads Bookshelf"
    }),
    Ember.Object.create({
      name: 'deliciousEvent',
      pluralName: 'deliciousEvents',
      icon: 'icon-delicious',
      prefix: 'Bookmarked',
      label: 'Delicious Bookmarks'
    }),
    Ember.Object.create({
      name: 'githubProjectEvent',
      pluralName: 'githubProjectEvents',
      icon: 'icon-github3',
      prefix: 'Created a new project',
      label: 'Github Projects'
    })
  ]);
