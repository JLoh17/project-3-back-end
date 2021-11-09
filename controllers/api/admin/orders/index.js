const { authenticateCurrentUserByToken } = require('../../../_helpers')

const { Order, User } = require('../../../../models')

const pageOrdersIndex = async function (req, res) {
  const { query } = req
  const { locals: { currentUser } } = res

  if (!currentUser.isAdmin) {
    return res.json("Unauthorized access")
  }

  const sort = query.sort || "createdAt"
  const page = Number(query.page) || 1
  const limit = 10
  const offset = (page - 1 ) * limit

  let order = []
  if (sort === 'status') {
    order.push (['status', 'DESC'])
  } else {
    order.push([sort, 'DESC'])
  }

  const orderAdminIndex = await Order.findAndCountAll({ // Count all is required for pagination
    order,
    limit,
    offset,
    include: [ // use [] if on the same line
      {
        association: Order.Products
      }
    ]
  })

  res.status(200).json({
    orders: orderAdminIndex.rows,
    meta: { page, limit, offset, totalPages: Math.ceil(orderAdminIndex.count / limit) }
  })
}

module.exports = [
  authenticateCurrentUserByToken,
  pageOrdersIndex]
