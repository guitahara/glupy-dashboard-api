const {sellersController} = require('../controllers/index')
console.log('controller', sellersController)
module.exports = (app) => {
	app.route('/api/sellers')
    .get(sellersController.find)

	app.route('/api/sellers/:id')
    .get(sellersController.findById)
    .put(sellersController.update)
}
