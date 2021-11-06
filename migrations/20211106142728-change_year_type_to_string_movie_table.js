'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
        'Movies',
        'movieYear',
        {
          type: Sequelize.STRING,
        }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
        'Movies',
        'movieYear',
        {
          type: Sequelize.INTEGER,
        }
    )
  }
};
