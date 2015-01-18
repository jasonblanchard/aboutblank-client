import DS from 'ember-data';
import registeredEvents from 'aboutblank/models/registered-events';

export default DS.Model.extend({
  metadata: function() {
    var typeKey = this.constructor.typeKey;
    var metadata = registeredEvents.findBy('name', typeKey);
    if (metadata !== undefined) {
      return metadata;
    } else {
      throw new Error("Cannot find typeKey in registeredEvents. Is " + typeKey + " a `name` registered in app/models/registered-events.js?");
    }
  }.property(),
  title: DS.attr('string'),
  uuid: DS.attr('string'),
  happenedAt: DS.attr('date'),
  imageUrl: DS.attr('string'),
  url: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  icon: function() {
    return this.get('metadata').get('icon');
  }.property(),
  prefix: function() {
    return this.get('metadata').get('prefix');
  }.property()
});
