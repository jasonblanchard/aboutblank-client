import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v2'
});

DS.ActiveModelAdapter.reopen({
  host: 'https://aboutblank-server.herokuapp.com'
});

