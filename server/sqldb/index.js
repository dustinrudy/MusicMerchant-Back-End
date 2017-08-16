/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.User = db.sequelize.import('../api/user/user.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.Listing = db.sequelize.import('../api/listing/listing.model');
db.Zip = db.sequelize.import('../api/zip/zip.model');
db.MSA = db.sequelize.import('../api/msa/msa.model');

module.exports = db;
