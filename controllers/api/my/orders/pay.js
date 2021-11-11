const { Order } = require('../../../../models')

const { authenticateCurrentUserByToken } = require('../../../_helpers')

const permittedParams = [
  'status'
]

const apiCreateNewPaidOrder = async function(req, res) {
  const { locals: { currentUser } } = res
  const { params } = req

  const order = await Order.findOne({
    where: {
      id: Number(params.id) || 0,
      UserId: currentUser.id
    }
  })

  if (!order) return res.json(`Order of ID ${params.id} not found`)

  await order.update({
    status: 'Pending-Delivery',
  }, {
    fields: permittedParams
  })

  await order.reload()

  res.json({ order: order })
}

module.exports = [
  authenticateCurrentUserByToken,
  apiCreateNewPaidOrder
]
