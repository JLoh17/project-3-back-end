'use strict';
const { Model } = require('sequelize');
const OrderProductSchema = require ('./schema/order_product')

module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    static associate(models) {
      OrderProduct.Order = this.belongsTo(models.Order)
      OrderProduct.Product = this.belongsTo(models.Product)
    }
  };

  const { tableAttributes } = OrderProductSchema (sequelize, DataTypes)
  OrderProduct.init(tableAttributes, {
    sequelize,
    modelName: 'OrderProduct',
  });
  return OrderProduct;
};
