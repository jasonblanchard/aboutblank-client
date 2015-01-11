import Ember from 'ember';

export default Ember.Controller.extend({
  
  goodreadsEvents: function() {
    return this.store.find('goodreads-event');
  }.property(),

  deliciousEvents: function() {
    return this.store.find('delicious-event');
  }.property(),

  feedItems: function() {
    
    var feed = Ember.A();

    this.get('goodreadsEvents').forEach(function(item) {
      feed.pushObject(item);
    });

    this.get('deliciousEvents').forEach(function(item) {
      feed.pushObject(item);
    });

    return feed.sortBy('happenedAt').reverse();

  }.property('goodreadsEvents.@each', 'deliciousEvents.@each')

});
