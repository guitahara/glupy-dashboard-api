const { loginController } = require('../controllers/index')

module.exports = (app) => {
  app.route('/api/login')
    .post(loginController.login)
}
