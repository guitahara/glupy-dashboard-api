const { verifyToken } = require('../utils/auth/index')

const authorize = async (req, res, next) => {
  try {
    if (req.originalUrl.includes('login')) { next() } else {
      let token = req.get('Authorization')
      token = token.split(' ')[1]
      req.user = verifyToken(token)
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(401).send({ message: 'Unauthorized access' })
  }
}

module.exports = authorize
