import DS from 'ember-data';

export default DS.Model.extend({
  goodreadsEvents: DS.hasMany('goodreadsEvent'),
  deliciousEvents: DS.hasMany('deliciousEvent')
});
