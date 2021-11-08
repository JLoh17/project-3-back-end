const { authenticateCurrentUserByToken } = require('../../../_helpers')

const { Order } = require('../../../../models')

const pageOrdersIndex = async function (req, res) {
  const { query } = req
  const { locals: { currentUser } } = res

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

  const orderAdminIndex = await Order.findAll({
    where: {
      UserID: currentUser.id
      // UserId: currentUser.id
    },
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
    order: orderAdminIndex.rows,
    meta: { page, limit, offset, totalPages: Math.ceil(orderAdminIndex.count / limit) }
  })
}

module.exports = [
  authenticateCurrentUserByToken,
  pageOrdersIndex]
