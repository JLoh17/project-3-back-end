const { Order } = require('../../../models')

const pageOrdersNew = async function (req, res) {
  const { params: { id } } = req


  const orderNew = await Order.findOne({
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

  if (!orderNew) {
      return res.status(404).json({ message: `Order ID ${id} not found!` })
  }

  res.status(200).json({ order: orderNew })
}

module.exports = [pageOrdersNew]
