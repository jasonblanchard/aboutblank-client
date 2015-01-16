import Ember from 'ember';
import startApp from 'aboutblank/tests/helpers/start-app';
import Pretender from 'pretender';
import mockResponse from 'aboutblank/tests/helpers/mock-response';
import feedsFixtures from 'aboutblank/tests/helpers/feeds-fixtures';

var App;
var server;

module('Integration - feed page', {
  setup: function() {
    App = startApp();
    server = new Pretender(function () {
      this.get('/api/v2/feeds', function(request) {
        return mockResponse.ok(feedsFixtures);
      });
    });
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

/*
test('Should show some feed items', function() {
  debugger;
  visit('/feed').then(function() {
    equal(find('.event-content').first().find('a').text(), "Ember.js - Ember.MutableArray");
  });
});
*/
