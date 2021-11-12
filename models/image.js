'use strict';
const { Model } = require('sequelize');
const ImageSchema = require('./schema/image')

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.Product = this.belongsTo(models.Product)
    }
  };

  const { tableAttributes } = ImageSchema (sequelize, DataTypes)
  Image.init(tableAttributes, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
