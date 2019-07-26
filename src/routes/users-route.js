const { usersController } = require('../controllers/index')

module.exports = (app) => {
  app.route('/api/users')
    .get(usersController.find)
    .post(usersController.create)

  app.route('/api/users/:_id')
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove)
}
