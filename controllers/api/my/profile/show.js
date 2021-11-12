const { authenticateCurrentUserByToken } = require('../../../_helpers')

const userSerializer = function(values) {
  const { ...user } = values.dataValues
  delete user.passwordHash
  return user
}

const apiAuthLogin = async function(req, res) {
  const { locals: { currentUser } } = res

  res.status(200).json(userSerializer(currentUser))
}

module.exports = [
  authenticateCurrentUserByToken,
  apiAuthLogin
]
