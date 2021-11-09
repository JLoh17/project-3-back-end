const { Order } = require('../../../../models')

const apiOrdersShow = async function (req, res) {
  const { params: { id } } = req


  const orderShow = await Order.findOne({
    where: {
      id: Number(id) || 0 ,
    },
    include: [
      {
        association: Order.OrderProducts
      }, {
        association: Order.Products
      }
    ]
  })

  if (!orderShow) {
      return res.status(404).json({ message: `Order ID ${id} not found!` })
  }

  res.status(200).json({ order: orderShow })
}

module.exports = [apiOrdersShow]
