const { listsController } = require('../controllers/index')

module.exports = (app) => {
  app.route('/api/stores/:storeId/lists')
    .get(listsController.find)
    .post(listsController.create)

  app.route('/api/stores/:storeId/lists/:id')
    .put(listsController.update)
    .delete(listsController.remove)
}
