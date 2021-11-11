'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('OrderProducts', 'size', {type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('OrderProducts', 'size', {type: Sequelize.INTEGER });

  }
};
