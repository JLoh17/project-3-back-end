'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Orders', 'firstName', {type: Sequelize.STRING });
    await queryInterface.addColumn('Orders', 'lastName', {type: Sequelize.STRING });
    await queryInterface.addColumn('Orders', 'telephone', {type: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'firstName');
    await queryInterface.removeColumn('Orders', 'lastName');
    await queryInterface.removeColumn('Orders', 'telephone');
  }
};
