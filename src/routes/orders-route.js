const {ordersController} = require('../controllers/index')

module.exports = (app) => {
	app.route('/api/orders')
		.get(ordersController.find)

	app.route('/api/orders/:id')
		.get(ordersController.findById)
}
