const { listsController } = require('../controllers/index')

module.exports = (app) => {
  app.route('/api/lists')
    .get(listsController.find)
    .post(listsController.create)

  app.route('/api/lists/:id')
    .put(listsController.update)
    .delete(listsController.remove)
}
