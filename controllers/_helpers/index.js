module.exports = {
  getUserByToken: require('./get-user-by-token'),
  authenticateCurrentUserByToken: require('./authenticate-current-user-by-token'),
  checkValidation: require('./check-validation'),
  order: {
    getOrderById: require('./orders/get-order-by-id')
  },
  myOrder: {
    getCurrentUserOrderById: require('./my/orders/get-current-user-order-by-id')
  }
}
