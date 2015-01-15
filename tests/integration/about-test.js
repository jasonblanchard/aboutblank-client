import Ember from 'ember';
import startApp from 'aboutblank/tests/helpers/start-app';

var App;

module('Integration - about page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should have some content about me', function() {
  visit('/about').then(function() {
    equal(find('.about').find('p').first().text(), "I am a Web developer and instructional technologist crafting tools and ideas that empower learners in a networked world.");
  });
});
