const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    catName: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Categories',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Categories_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
