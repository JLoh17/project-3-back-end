const { Order } = require('../../../models')

const pageOrdersIndex = async function (req, res) {
  const { params: { id } } = req


  const orderNewIndex = await Order.findAndCountAll({
    where: {
      id: Number(id) || 0 ,
    },
    include: [ // use [] if on the same line
      {
        association: Order.Products
      }, {
        association: Order.OrderProducts
      }
    ]
  })

  if (!orderNewIndex) {
      return res.status(404).json({ message: `Order ID ${id} not found!` })
  }

  res.status(200).json({ order: orderNewIndex })
}

module.exports = [pageOrdersIndex]
