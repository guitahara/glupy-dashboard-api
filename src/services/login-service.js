const { userRepository } = require('../repositories/index')
const { User } = require('../models/index')
const { generateToken } = require('../utils/auth/index')

const login = async credentials => {
  const users = await userRepository.find({ username: credentials.username })
  if (!users.length) throw new Error('user not found!')
  const user = new User(users[0])
  return user.comparePassword(credentials.password)
    ? {
      status: 200,
      name: user.name,
      username: user.userName,
      token: generateToken({
        name: user.name,
        username: user.userName,
        sellerId: user.sellerId
      }) }
    : {
      status: 401,
      message: 'unauthorized'
    }
}

module.exports = {
  login
}
