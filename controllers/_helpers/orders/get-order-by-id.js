const { Order } = require('../../../models')

module.exports = async function (req, res, next) {
  const { params: { id } } = req

  const order = await Order.findOne({
    where: { id: Number(id) || 0 },
  })

  if (!order) {
    return res.status(404).json({ message: `Order of ID ${id} not found!` })
  }

  res.locals.currentOrder = order

  next()
}
