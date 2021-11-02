'use strict';
const { Model } = require('sequelize');
const UserSchema = require('./schema/user')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.Cart = this.hasMany(models.Cart)
      User.Order = this.hasMany(models.Order)
      User.AuthenticityTokens = this.hasMany(models.AuthenticityToken)
      User.Products = this.belongsToMany(models.Product, { through: 'Cart' })    }
  };

  const { tableAttributes } = UserSchema (sequelize, DataTypes)
  User.init(tableAttributes, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
