'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn('users', 'state', { type: Sequelize.STRING, allowNull: false })
    queryInterface.addColumn('users', 'city', { type: Sequelize.STRING, allowNull: false })
    queryInterface.addColumn('users', 'zip', {type: Sequelize.STRING, allowNull: false })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('users', 'state')
    queryInterface.removeColumn('users', 'city')
    queryInterface.removeColumn('users', 'zip')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
