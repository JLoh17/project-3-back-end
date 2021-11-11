'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('OrderProducts', 'size', {type: Sequelize.INTEGER });
    await queryInterface.removeColumn('OrderProducts', 'subTotal', {type: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('OrderProducts', 'size');
    await queryInterface.addColumn('OrderProducts', 'subTotal');

  }
};
