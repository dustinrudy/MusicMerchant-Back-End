/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var Thing = sqldb.Thing;
var User = sqldb.User;
var Listing = sqldb.Listing;


Listing.sync()
  .then(function(){
    return Listing.destory({where {} });
  })
  .then(function(){
    Listing.bulkCreate([{
    description: 'This is a great guitar',
    category_id: [1,2,3,4],
    title: "1950's Gibson Guitar",
    price: 2000,
    sale_trade: 'S',
    condition: 'Used',
    user_id: 1,
    views: 200,
    date_posted: 12/02/2017
    }]);
  });

Thing.sync()
  .then(function() {
    return Thing.destroy({ where: {} });
  })
  .then(function() {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }]);
  });

User.sync()
  .then(function() {
    return User.destroy({ where: {} });
  })
  .then(function() {
    User.bulkCreate([{
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }])
    .then(function() {
      console.log('finished populating users');
    });
  });
