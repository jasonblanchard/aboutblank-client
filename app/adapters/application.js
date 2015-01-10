import DS from 'ember-data';
import ENV from 'aboutblank/config/environment';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v2'
});

DS.ActiveModelAdapter.reopen({
  if (ENV.environment === 'development') {
    host: 'localhost:3000'
  } else {
    host: 'https://aboutblank-server.herokuapp.com'
  }
});

