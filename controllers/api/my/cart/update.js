const { Cart } = require('../../../../models')

// TODO permitted params

const cartUpdate = async function (req, res) {
  const { params: { id }, body } = req

  const cart = await Cart.findOne({
    where: {
      id: Number(id) || 0
    }
  })

  if (!cart) {
    return res.status(404).json({ message: `Cart ID ${id} not found!` })
  }

  await cart.update(body)

  res.status(200).json({ cart })
}

module.exports = [cartUpdate]
