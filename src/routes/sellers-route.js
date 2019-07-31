const { sellersController } = require('../controllers/index')

module.exports = (app) => {
  // app.route('/api/sellers')
  //   .get(sellersController.find)

  app.route('/api/sellers')
    .get(sellersController.findById)
    .put(sellersController.update)
}
