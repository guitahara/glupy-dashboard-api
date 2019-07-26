const { loginService } = require('../services/index')

const login = async (req, res) => {
  try {
    const { body } = req
    const response = await loginService.login(body)
    res.status(response.status).send(response)
  } catch (error) {
    res.status(500).send('login error')
  }
}

module.exports = {
  login
}
