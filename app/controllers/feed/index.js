import Ember from 'ember';
import registeredEvents from 'aboutblank/models/registered-events';

export default Ember.Controller.extend({

  availableEventTypes: function() {
    return registeredEvents;
  }.property('model'),

  eventSelection: 'all',

  activeEventTypes: function() {
    if (this.get('eventSelection') === 'all') {
      return this.get('availableEventTypes');
    } else {
      return this.get('availableEventTypes').filterBy('name', this.get('eventSelection'));
    }
  }.property('eventSelection'),

  feed: function() {
    return this.get('model').get('firstObject');
  }.property('model'),

  feedItems: function() {

    var rawfeed = this.get('feed');
    var feed = Ember.A();

    this.get('activeEventTypes').forEach(function(item) {
      rawfeed.get(item.get('name')).forEach(function(eventItem) {
        feed.pushObject(eventItem);
      });
    });
    
    return feed.sortBy('happenedAt').reverse();

  }.property('feed.@each', 'activeEventTypes.@each')

});
