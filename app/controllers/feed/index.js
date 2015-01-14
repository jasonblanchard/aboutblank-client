import Ember from 'ember';
import eventMetadata from 'aboutblank/models/event-metadata';

export default Ember.Controller.extend({

  availableEvents: function() {

    // TODO: Refactor this to use the model classes somehow
    // Put these proxy objects in the eventMetadata service object
    var eventTypes = [
      Ember.ObjectProxy.create({content: {name: 'deliciousEvents', active: true, icon: eventMetadata()['deliciousEvent'].icon}}),
      Ember.ObjectProxy.create({content: {name: 'goodreadsEvents', active: true, icon: eventMetadata()['goodreadsEvent'].icon}})
    ];

    return Ember.ArrayProxy.create({
      content: eventTypes
    });
  }.property('model'),

  activeEvents: Ember.computed.filterBy('availableEvents', 'active', true),

  allEvents: function() {
    return this.get('model').get('firstObject');
  }.property('model'),

  feedItems: function() {

    var events = this.get('allEvents');
    var feed = Ember.A();

    this.get('activeEvents').forEach(function(item) {
      events.get(item.get('name')).forEach(function(eventItem) {
        feed.pushObject(eventItem);
      });
    });
    
    return feed.sortBy('happenedAt').reverse();

  }.property('allEvents.@each', 'activeEvents.@each')

});
