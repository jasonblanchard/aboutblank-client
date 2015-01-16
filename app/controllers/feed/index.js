import Ember from 'ember';
import eventMetadata from 'aboutblank/models/event-metadata';

export default Ember.Controller.extend({

  availableEventTypes: function() {

    // TODO: Refactor this to use the model classes somehow
    // Put these proxy objects in the eventMetadata service object
    var eventTypes = [
      Ember.ObjectProxy.create({content: {name: 'deliciousEvents', label: "Delicious Bookmarks", icon: eventMetadata()['deliciousEvent'].icon}}),
      Ember.ObjectProxy.create({content: {name: 'goodreadsEvents', label: "Goodreads Bookmarks", icon: eventMetadata()['goodreadsEvent'].icon}})
    ];

    return Ember.ArrayProxy.create({
      content: eventTypes
    });
  }.property('model'),

  eventSelection: 'all',

  activeEventTypes: function() {
    if (this.get('eventSelection') == 'all') {
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
