const { Order, User } = require('../../../../models')

module.exports = function(format) {
  return async function (req, res, next) {
    const { locals: { currentUser } } = res
    const { params: { id } } = req
    const order = await Order.findOne({
      where: {
        id: Number(id) || 0,
        UserId: currentUser.id
      },
      include: {
        association: Order.User
      },
      order: [['User', 'createdAt', 'DESC']]
    })

    if (!order) {
      if (format === 'modal') {
        return res.render('api/my/orders/not-found', { layout: false })
      }

      if (format === 'json') {
        return res.status(404).json({ message: `Order ID ${id} not found!` })
      }
    }

    res.locals.currentOrder = order

    next()
  }
}
