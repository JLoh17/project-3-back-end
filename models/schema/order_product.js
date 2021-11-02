const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderProduct', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subTotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderProducts',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "OrderProducts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
