import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Ping the server to induce loading route if slow. TODO: Figure out better way to do this.
    return this.store.find('goodreads-event');
  }
});
