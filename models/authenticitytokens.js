'use strict';
const { Model } = require('sequelize');
const AuthenticityTokensSchema = require('./schema/authenticity_token')

module.exports = (sequelize, DataTypes) => {
  class AuthenticityTokens extends Model {
    static associate(models) {
      AuthenticityToken.User = this.belongsTo(models.User)
    }
  };
  const { tableAttributes } = AuthenticityTokensSchema (sequelize, DataTypes)
  AuthenticityTokens.init(tableAttributes, {
    sequelize,
    modelName: 'AuthenticityTokens',
  });

  return AuthenticityTokens;
};
