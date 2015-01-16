import DS from 'ember-data';

export default DS.Model.extend({
  metadata: Ember.Object.create({icon: '', prefix: ''}),
  title: DS.attr('string'),
  uuid: DS.attr('string'),
  happenedAt: DS.attr('date'),
  imageUrl: DS.attr('string'),
  url: DS.attr('string'),
  icon: function() {
    return this.get('metadata').get('icon');
  }.property(),
  prefix: function() {
    return this.get('metadata').get('prefix');
  }.property()
});
