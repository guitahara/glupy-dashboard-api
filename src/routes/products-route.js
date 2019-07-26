const { productsController } = require('../controllers/index')

module.exports = (app) => {
  app.route('/api/products')
    .get(productsController.find)
    .post(productsController.create)

  app.route('/api/products/:id')
    .get(productsController.findById)
    .put(productsController.update)
    .delete(productsController.remove)
}
