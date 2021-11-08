'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Reviews', 'MovieId', {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: 'Movies',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Reviews', 'MovieId');
  }
};
