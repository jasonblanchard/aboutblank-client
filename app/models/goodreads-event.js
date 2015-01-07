import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  uuid: DS.attr('string'),
  happened_at: DS.attr('date'),
  image_url: DS.attr('string'),
  url: DS.attr('string'),
});
