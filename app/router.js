import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('projects');
  this.route('feed');
  this.resource('goodreads-events', { path: 'goodreads-events' }, function() { });
});

export default Router;
