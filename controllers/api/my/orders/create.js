const { body } = require('express-validator')
const { Cart } = require('../../../../models')


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
  const { body: productParams } = req

  // const cart = currentUser.getCart()
  const cart = Cart.findAll({ where: { UserId: currentUser.id }}) // alternative writing of above line

  // [
  //   {
  //     id: '',
  //     UserId: '',
  //     ProductId: '',
  //     size: '',
  //     quantity: ''
  //   }, {
  //     id: '',
  //     UserId: '',
  //     ProductId: '',
  //     size: '',
  //     quantity: ''
  //   }
  // ]

  const orderProductData = cart.map(({ProductId, size, quantity}) => {
    return { ProductId, size, quantity }
  })

  await Order.create({
    ...productParams,
    OrderProducts: orderProductData
  }, {
    // fields: permittedParams,
    include: {
      association: Order.OrderProducts
    }
  })

  // TODO
  // ! await Cart.destroy({ where: { UserId: CurrentUser.id }})

  res.json({ message: 'Created new OrderProduct'})
}

module.exports = [
  multer().none(),
  authenticateCurrentUserByToken,
  // validation,
  // checkValidation,
  apiCreateNewOrderProduct
]
