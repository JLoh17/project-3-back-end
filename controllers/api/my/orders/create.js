const { body } = require('express-validator')

const { authenticateCurrentUserByToken, checkValidation } = require('../../../_helpers')
const multer = require('multer')

const permittedParams = [
  'OrderId',
  'ProductId',
  'quantity',
  'subTotal',
]

const validation = [
  body('OrderId').isInt().withMessage('OrderID must be a String').notEmpty().withMessage('OrderID is Required'),
  body('ProductId').isInt().withMessage('ProductID must be a String').notEmpty().withMessage('ProductID is Required'),
  body('quantity').isInt().withMessage('Quantity must be a number').notEmpty().withMessage('Quantity is Required'),
  body('subTotal').isInt().withMessage('Subtotal must be a number').notEmpty().withMessage('Subtotal is Required'),

]


const apiCreateNewOrder = async function(req, res) {
  const { locals: { currentUser } } = res
  const { body: productParams } = req

  await currentUser.createOrderProduct({
    ...productParams,
  }, {
    fields: permittedParams
  })

  res.json({ message: 'Created new Order'})
}

module.exports = [
  multer().none(),
  authenticateCurrentUserByToken,
  validation,
  checkValidation,
  apiCreateNewOrder
]
