const { Order } = require('../../../../models')

const apiOrdersPay = async function (req, res) {
  const { params: { id } } = req


  const orderPay = await Order.findOne({
    where: {
      id: Number(id) || 0
    },
    include: [
      {
        association: Order.OrderProducts
      }, {
        association: Order.Products
      }
    ]
  })

  if (!orderPay) {
    return res.status(404).json({ message: `Order ID ${id} not found!` })
  }

  res.status(200).json({ order: orderPay })
}

module.exports = [apiOrdersPay]
