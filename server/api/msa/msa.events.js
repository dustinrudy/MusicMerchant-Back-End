/**
 * Msa model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Msa = require('../../sqldb').Msa;
var MsaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MsaEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Msa.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    
    MsaEvents.emit(event + ':' + doc.id, doc);
    MsaEvents.emit(event, doc);
    done(null);
  }
}

module.exports = MsaEvents;
