'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Carts', 'size', {type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Carts', 'size', {type: Sequelize.INTEGER });

  }
};
