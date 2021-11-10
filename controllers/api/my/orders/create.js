const { body } = require('express-validator')
const { Cart, Order } = require('../../../../models')


const { authenticateCurrentUserByToken, checkValidation } = require('../../../_helpers')
const multer = require('multer')

const permittedParams = [
  'OrderId',
  'ProductId',
  'quantity',
  'subTotal',
]

// const validation = [
//   body('OrderId').isInt().withMessage('OrderID must be a Number').notEmpty().withMessage('OrderID is Required'),
//   body('ProductId').isInt().withMessage('ProductID must be a Number').notEmpty().withMessage('ProductID is Required'),
//   body('quantity').isInt().withMessage('Quantity must be a number').notEmpty().withMessage('Quantity is Required'),
//   body('subTotal').isInt().withMessage('Subtotal must be a number').notEmpty().withMessage('Subtotal is Required'),
// ]

const apiCreateNewOrderProduct = async function(req, res) {
  const { locals: { currentUser } } = res
  const { body: userParams } = req

  // const cart = await currentUser.getCart()
  // alternative writing of above line
  const cart = await Cart.findAll({ where: { UserId: currentUser.id }})

  const orderProductData = cart.map(({ProductId, size, quantity}) => {
    return { ProductId, size, quantity }
  })

  await Order.create({
    //userParams takes in the schema details of the Order table
    ...userParams,
    // takes out deliveryAddress and maps to Order.address
    deliveryAddress: userParams.address,
    // takes out status and maps the status to "Pending Payment"
    status: 'Pending Payment',
    OrderProducts: orderProductData
  }, {
    fields: permittedParams,
    include: {
      association: Order.OrderProducts
    }
  })


  await Cart.destroy({ where: { UserId: currentUser.id }})

  // TODO check if save as default is true. if true update currentUser with userParams
  // await currentUser.update(userParams)

  res.json({ message: 'Created new OrderProduct'})
}

module.exports = [
  multer().none(),
  authenticateCurrentUserByToken,
  // validation,
  // checkValidation,
  apiCreateNewOrderProduct
]
