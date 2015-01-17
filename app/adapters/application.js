import DS from 'ember-data';
import ENV from 'aboutblank/config/environment';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v2'
});


if (ENV.environment === 'production') {
  DS.ActiveModelAdapter.reopen({
    host: 'https://aboutblank-server.herokuapp.com'
  });
} else if (ENV.environment === 'development') {
  DS.ActiveModelAdapter.reopen({
    host: 'http://localhost:3000'
  });
} else {
  DS.ActiveModelAdapter.reopen({
    host: ''
  });
}
