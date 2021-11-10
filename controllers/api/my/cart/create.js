const { body } = require('express-validator')

const { authenticateCurrentUserByToken, checkValidation } = require('../../../_helpers')
const multer = require('multer')

const permittedParams = [
  'ProductId',
  'size',
  'quantity',
]

const validation = [
  body('ProductId').isInt().withMessage('ProductID must be a String').notEmpty().withMessage('ProductID is Required'),
  body('size').isInt().withMessage('Size must be a number').notEmpty().withMessage('Size is Required'),
  body('quantity').isInt().withMessage('Quantity must be a number').notEmpty().withMessage('Quantity is Required'),
]

const apiAddCartItem = async function(req, res) {
  const { locals: { currentUser } } = res
  const { body: productParams } = req

  await currentUser.createCart(productParams, {
    fields: permittedParams
  })

  res.json({ message: 'Added item to Cart'})
}

module.exports = [
  multer().none(),
  authenticateCurrentUserByToken,
  validation,
  checkValidation,
  apiAddCartItem
]
