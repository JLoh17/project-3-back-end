var DataTypes = require("sequelize").DataTypes;
var _AuthenticityToken = require("./authenticity_token");
var _Cart = require("./cart");
var _Category = require("./category");
var _OrderProduct = require("./order_product");
var _Order = require("./order");
var _Product = require("./product");
var _SequelizeMetum = require("./sequelize_metum");
var _User = require("./user");

function initModels(sequelize) {
  var AuthenticityToken = _AuthenticityToken(sequelize, DataTypes);
  var Cart = _Cart(sequelize, DataTypes);
  var Category = _Category(sequelize, DataTypes);
  var OrderProduct = _OrderProduct(sequelize, DataTypes);
  var Order = _Order(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var SequelizeMetum = _SequelizeMetum(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);


  return {
    AuthenticityToken,
    Cart,
    Category,
    OrderProduct,
    Order,
    Product,
    SequelizeMetum,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
