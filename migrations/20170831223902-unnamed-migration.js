'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn('listings', 'active', { type: Sequelize.BOOLEAN, default: true })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {

    queryInterface.removeColumn('listings', 'active')

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
