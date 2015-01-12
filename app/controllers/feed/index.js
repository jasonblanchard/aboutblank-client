import Ember from 'ember';

export default Ember.Controller.extend({

  feedItems: function() {

    var events = this.get('model').get('firstObject');
    var deliciousEvents = events.get('deliciousEvents');
    var goodreadsEvents = events.get('goodreadsEvents');
    
    var feed = Ember.A();

    deliciousEvents.forEach(function(item) {
      feed.pushObject(item);
    });

    goodreadsEvents.forEach(function(item) {
      feed.pushObject(item);
    });

    return feed.sortBy('happenedAt').reverse();

  }.property('model.goodreadsEvents.@each', 'model.deliciousEvents.@each')

});
