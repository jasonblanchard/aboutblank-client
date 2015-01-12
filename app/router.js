import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('projects');
  this.resource('feed', function() {});
  this.resource('goodreads-events', { path: 'goodreads-events' }, function() { });
  this.resource('delicious-events', { path: 'delicious-events' }, function() { });
});

export default Router;
