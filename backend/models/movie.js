'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Review)
    }
  };
  Movie.init({
    movieTitle: DataTypes.STRING,
    movieYear: DataTypes.STRING,
    moviePicture: DataTypes.STRING,
    movieSynopsis: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Movie',
  });
  return Movie;
};