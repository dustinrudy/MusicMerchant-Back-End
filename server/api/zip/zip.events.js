/**
 * Zip model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Zip = require('../../sqldb').Zip;
var ZipEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ZipEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Zip.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    
    ZipEvents.emit(event + ':' + doc.id, doc);
    ZipEvents.emit(event, doc);
    done(null);
  }
}

module.exports = ZipEvents;