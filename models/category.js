'use strict';
const { Model } = require('sequelize');
const CategorySchema = require('./schema/category')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.Product=this.belongsTo(models.Product)
    }
  };

  const { tableAttributes } = CategorySchema (sequelize, DataTypes)
  Category.init(tableAttributes, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
