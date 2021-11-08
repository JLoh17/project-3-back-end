'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Carts', 'size', {type: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Carts', 'size');
  }
};
