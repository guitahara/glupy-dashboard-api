const {customersController} = require('../controllers/index')

module.exports = (app) => {
	app.route('/api/customers')
    .get(customersController.find)

	app.route('/api/customers/:id')
    .get(customersController.findById)
    .put(customersController.update)
}
