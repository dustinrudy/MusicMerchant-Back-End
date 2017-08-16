/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app) {

  // Insert routes below
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.use('/users', require('./api/user'));
  app.use('/auth', require('./auth'));

  app.use('/things', require('./api/thing'));
  app.use('/listings', require('./api/listing'));
  app.use('/zips', require('./api/zip'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth)/*')
   .get(errors[404]);

};
