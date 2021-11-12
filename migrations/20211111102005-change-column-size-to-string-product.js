'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Products', 'size', {type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Products', 'size', {type: Sequelize.INTEGER });

  }
};
