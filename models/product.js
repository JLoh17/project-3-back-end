'use strict';
const { Model } = require('sequelize');
const ProductSchema = require('./schema/product')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.Category = this.hasOne(models.Category)
      Product.Orders = this.belongsToMany(models.Order, {through: 'OrderProduct'})
      Product.OrderProducts = this.hasMany(models.OrderProduct)
      Product.Users = this.belongsToMany(models.User, {through: 'Cart'})
      Product.Carts = this.hasMany(models.Cart)
      Product.Images = this.hasMany(models.Image)
    }
  };
  const { tableAttributes } = ProductSchema (sequelize, DataTypes)
  Product.init(tableAttributes, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
