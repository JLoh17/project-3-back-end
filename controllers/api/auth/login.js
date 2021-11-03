const bcrypt = require("bcrypt")
const crypto = require('crypto')
const multer = require('multer')
const { body } = require('express-validator')

const { User } = require('../../../models')
const { checkValidation } = require('../../_helpers')

const validation = [
  body('email')
    .notEmpty().withMessage('Email is Required')
    .isEmail().withMessage('Email must be valid'),
    // .custom(async function(email) {
    //   if (email) {
    //     const user = await User.findOne({ where: { nlike: email } })
    //     if (user) return Promise.reject()
    //   }
    // }).withMessage('Incorrect credentials'),
  body('passwordHash')
    .notEmpty().withMessage('Password is Required')
    // .custom(async function(password) {
    //   if (password) {
    //     const user = await User.findOne({ where: { nlike: password } })
    //     if (user) return Promise.reject()
    //   }
    // }).withMessage('Incorrect credentials'),
]

const userSerializer = function(values) {
  const { ...user } = values.dataValues
  delete user.passwordHash
  return user
}

const apiAuthLogin = async function(req, res) {
  const { body: { email, passwordHash } } = req

  // Find the user
  let user = await User.findOne({ where: { email } })
  if (!user) return res.status(404).json({ message: `User not found with email: ${email}` })

  // Check if password entered is the same as the one in DB
  const validPassword = await bcrypt.compare(passwordHash, user.passwordHash)
  if (!validPassword) return res.status(401).json({ message: 'Credentials are incorrect' })

  // Generate a token and set it as cookie
  const token = crypto.randomBytes(64).toString('hex')
  await user.createAuthenticityToken({ token })
  req.session.token = token

  // Prevents the password from being sent!
  res.status(200).json(userSerializer(user))
}

module.exports = [
  multer().none(),
  validation,
  checkValidation,
  apiAuthLogin
]
