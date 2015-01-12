import Ember from 'ember';

export default Ember.Controller.extend({

  availableEvents: function() {
    
    // TODO: Refactor this to use the model classes somehow
    var eventTypes = [
      Ember.ObjectProxy.create({content: {name: 'deliciousEvents', active: true, icon: 'icon-delicious'}}),
      Ember.ObjectProxy.create({content: {name: 'goodreadsEvents', active: true, icon: 'icon-book'}})
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
    var deliciousEvents = events.get('deliciousEvents');
    var goodreadsEvents = events.get('goodreadsEvents');
    var feed = Ember.A();

    this.get('activeEvents').forEach(function(item) {
      events.get(item.get('name')).forEach(function(eventItem) {
        feed.pushObject(eventItem);
      });
    });
    
    return feed.sortBy('happenedAt').reverse();

  }.property('allEvents.@each', 'activeEvents.@each')

});
