const { Op } = require("sequelize");
const { Product } = require('../../../models')

const pageProductsIndex = async function (req, res) {
  const {query} = req

  const q = query.q || ''
  const sort = query.sort || "createdAt"
  const page = Number(query.page) || 1
  const limit = 12
  const offset = (page - 1 ) * limit
  let order = []

  if (sort === 'productName') {
    order.push (['productName', 'ASC'])
  } else if (sort === 'Price') {
    order.push (['Price', 'DESC'])
  } else {
    order.push([sort, 'DESC'])
  }

  const results = await Product.findAndCountAll({
    where: {
      productName: {
        [Op.iLike]: `%${q}%`
      }
    },
    order,
    limit,
    offset,
  })

  return res.status(200).json({
    product: results.rows,
    meta: { q, page, limit, offset, totalPages: Math.ceil(results.count / limit) }
  })
}

module.exports = [pageProductsIndex]
