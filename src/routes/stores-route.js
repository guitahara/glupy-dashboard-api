const {storesController} = require('../controllers/index')

module.exports = (app) => {
	app.route('/api/stores')
    .get(storesController.find)
    .post(storesController.create)

	app.route('/api/stores/:id')
    .get(storesController.findById)
    .put(storesController.update)
}
