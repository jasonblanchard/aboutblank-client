import BaseEvent from 'aboutblank/models/base-event';
import registeredEvents from 'aboutblank/models/registered-events';

var metadata = registeredEvents.findBy('name', 'deliciousEvents');

export default BaseEvent.extend({
  icon: metadata.get('icon'),
  prefix: metadata.get('prefix')
});
