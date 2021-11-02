const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cart', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
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
    }
  }, {
    sequelize,
    tableName: 'Carts',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Carts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
