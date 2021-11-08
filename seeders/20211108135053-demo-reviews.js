'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reviews', [
      {
        reviewName: "ANON 1",
        reviewDesc: "GOOD WATCH",
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewName: "ANON 2",
        reviewDesc: "MEH",
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await  queryInterface.bulkDelete('Reviews', null, {})
  }
};
