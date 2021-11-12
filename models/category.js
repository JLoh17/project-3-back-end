'use strict';
const { Model } = require('sequelize');
const CategorySchema = require('./schema/category')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.Products = this.hasMany(models.Product)
    }
  };

  const { tableAttributes } = CategorySchema (sequelize, DataTypes)
  Category.init(tableAttributes, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
