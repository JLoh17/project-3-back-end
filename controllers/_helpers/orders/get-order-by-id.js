const { Order } = require('../../../models')

module.exports = function(format) {
  return async function (req, res, next) {
    const { params: { id } } = req
    const order = await Order.findOne({
      where: { id: Number(id) || 0 },
      // include: {
        // association: Order.Rating
      // },
      // order: [['Rating', 'createdAt', 'DESC']]
    })

    if (!order) {
      if (format === 'modal') {
        return res.render('api/orders/not-found', { layout: false })
      }

      if (format === 'json') {
        return res.status(404).json({ message: `Order of ID ${id} not found!` })
      }
    }

    res.locals.currentOrder = order

    next()
  }
}
