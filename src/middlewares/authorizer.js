const { verifyToken } = require('../utils/auth/index')

const authorize = async (req, res, next) => {
  try {
    let token = req.get('Authorization')
    token = token.split(' ')[1]
    req.user = verifyToken(token)
    next()
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized access' })
  }
}

module.exports = authorize
