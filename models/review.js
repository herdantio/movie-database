'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Review.init({
    reviewName: DataTypes.STRING,
    reviewDesc: DataTypes.STRING,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Review',
  });
  return Review;
};