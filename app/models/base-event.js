import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  uuid: DS.attr('string'),
  happenedAt: DS.attr('date'),
  imageUrl: DS.attr('string'),
  url: DS.attr('string'),
});
