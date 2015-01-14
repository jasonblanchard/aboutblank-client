import BaseEvent from 'aboutblank/models/base-event';
import eventMetadata from 'aboutblank/models/event-metadata';

var metadata = eventMetadata()['goodreadsEvent'];

export default BaseEvent.extend({
  icon: metadata.icon,
  prefix: metadata.prefix
});
