'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies',
        [
          {
            movieTitle: "Movie 1",
            movieYear: "2010",
            moviePicture: "freezing-vibration.jpg",
            movieSynopsis: "just a synopsis",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            movieTitle: "Movie 2",
            movieYear: "2019",
            moviePicture: "acchi-kocchi.jpg",
            movieSynopsis: "just a synopsis. Really, it's just a synopsis for movie 2",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
