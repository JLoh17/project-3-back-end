const { authenticateCurrentUserByToken, cart: { getCartById } } = require('../../../_helpers')

const orderItemDestroy = async function(req, res) {
  const { locals: { currentCart } } = res

  await currentCart.destroy()
  res.status(204).json()
}

module.exports = [
  authenticateCurrentUserByToken,
  getCartById,
  orderItemDestroy
]
