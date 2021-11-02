'use strict';
const { Model } = require('sequelize');
const OrderSchema = require('./schema/order')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.User = this.belongsTo(models.User)
      Order.Products = this.hasMany(models.Product)
      Order.OrderProducts = this.hasMany(models.OtherProduct)
    }
  };

  const { tableAttributes } = OrderSchema (sequelize, DataTypes)
  Order.init(tableAttributes, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
