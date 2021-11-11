'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'firstName', {type: Sequelize.STRING, defaultValue: "" });
    await queryInterface.changeColumn('Users', 'lastName', {type: Sequelize.STRING, defaultValue: ""  });
    await queryInterface.changeColumn('Users', 'telephone', {type: Sequelize.STRING, defaultValue: ""  });
    await queryInterface.changeColumn('Users', 'address', {type: Sequelize.STRING, defaultValue: ""  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'firstName');
    await queryInterface.changeColumn('Users', 'lastName');
    await queryInterface.changeColumn('Users', 'telephone', {type: Sequelize.INTEGER });
    await queryInterface.changeColumn('Users', 'address');
  }
};
