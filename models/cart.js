'use strict';
const { Model } = require('sequelize');
const CartSchema = require('./schema/cart')

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.User= this.belongsTo(models.User)
      Cart.Product= this.belongsTo(models.Product)
    }
  };
const { tableAttributes } = CartSchema (sequelize, DataTypes)
  Cart.init(tableAttributes, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
