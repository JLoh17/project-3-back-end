const { authenticateCurrentUserByToken, getUserByToken } = require('../../../_helpers')

const orderItemDestroy = async function(req, res) {
  const { locals: { currentOrder } } = res

  await currentOrder.destroy()
  res.status(204).json()
}

module.exports = [
  authenticateCurrentUserByToken,
  getUserByToken,
  orderItemDestroy
]
