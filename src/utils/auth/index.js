const jwt = require('jsonwebtoken')
const secret = 'amu9TZVvXe'

const generateToken = user => jwt.sign(user, secret)

const verifyToken = token => jwt.verify(token, secret)

const decodeToken = token => jwt.decode(token)

module.exports = {
  generateToken,
  verifyToken,
  decodeToken
}
