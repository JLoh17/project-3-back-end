const { body } = require('express-validator')

const { authenticateCurrentUserByToken, checkValidation } = require('../../_helpers')
const { Product, User, OrderProduct } = require('../../../models')
const multer = require('multer')

const permittedParams = [
  'productName',
  'description',
  'price',
  'CategoryId',
  'size',
  'quantity'
  'subTotal'
]

const validation = [
  body('productName').isString().withMessage('Name must be a String').notEmpty().withMessage('Name is Required'),
  body('description').isString().withMessage('Description must be a String').notEmpty().withMessage('Description is Required'),
  body('price').isFloat().withMessage('Price must be a number').notEmpty().withMessage('Price is Required'),
  body('CategoryId').isInt().withMessage('CategoryID must be a number').notEmpty().withMessage('CategoryID is Required'),
  body('size').isInt().withMessage('Size must be a number').notEmpty().withMessage('Size is Required'),
  body('quantity').isInt().withMessage('Quantity must be a number').notEmpty().withMessage('Quantity is Required'),

]

const apiAddCartItem = async function(req, res) {
  const { locals: { currentUser } } = res
  const { body: productParams } = req

  const newCartItem = await OrderProduct.create({
    ...productParams,
  }, {
    fields: permittedParams,
    include: {
      association: Product.User
    } {
      association: Product.OrderProduct
    }
  })
  newCartItem.setUser(currentUser)

  res.json({ message: 'Added item to Cart'})
}

module.exports = [
  multer().none(),
  authenticateCurrentUserByToken('json'),
  validation,
  checkValidation,
  apiAddCartItem
]
