/**
 * Listing model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Listing = require('../../sqldb').Listing;
var ListingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ListingEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Listing.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    
    ListingEvents.emit(event + ':' + doc.id, doc);
    ListingEvents.emit(event, doc);
    done(null);
  }
}

module.exports = ListingEvents;
