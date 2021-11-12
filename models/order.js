'use strict';
const { Model } = require('sequelize');
const OrderSchema = require('./schema/order')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.User = this.belongsTo(models.User)
      Order.Products = this.belongsToMany(models.Product, { through: 'OrderProduct' })
      Order.OrderProducts = this.hasMany(models.OrderProduct)
    }
  };

  const { tableAttributes } = OrderSchema (sequelize, DataTypes)
  Order.init(tableAttributes, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
