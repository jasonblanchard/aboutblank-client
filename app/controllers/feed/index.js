import Ember from 'ember';

export default Ember.Controller.extend({

  activeEvents: ['deliciousEvents', 'goodreadsEvents'],

  allEvents: function() {
    return this.get('model').get('firstObject');
  }.property('model'),

  feedItems: function() {

    var events = this.get('allEvents');
    var deliciousEvents = events.get('deliciousEvents');
    var goodreadsEvents = events.get('goodreadsEvents');
    var feed = Ember.A();

    this.get('activeEvents').forEach(function(item) {
      events.get(item).forEach(function(eventItem) {
        feed.pushObject(eventItem);
      });
    });
    
    return feed.sortBy('happenedAt').reverse();

  }.property('allEvents.@each', 'activeEvents')

});
