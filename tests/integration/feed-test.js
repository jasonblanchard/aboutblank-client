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
    //server.shutdown();
  }
});

test('Should show some feed items', function() {
  visit('/feed').then(function() {
    equal(find('.event-content').first().find('.prefix').text(), "Bookmarked");
    equal(find('.event-content').first().find('.title').text(), "Ember.js - Ember.MutableArray");

    equal(find('.event-content').last().find('.prefix').text(), "Started reading");
    equal(find('.event-content').last().find('.title').text(), "A Dance with Dragons (A Song of Ice and Fire, #5)");
  });
});

test('Should filter feed items', function() {
  visit('/feed').then(function() {
    click('input#goodreadsEvent');
    andThen(function() {
      equal(find('.event-content').first().find('.title').text(), "Programming in Go: Creating Applications for the 21st Century");
      equal(2, find('.event').length);
    });
  });
});
