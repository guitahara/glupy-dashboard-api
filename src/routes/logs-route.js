const {logsController} = require('../controllers/index')

module.exports = (app) => {
	app.route('/api/logs')
		.get(logsController.find)

	app.route('/api/logs/:id')
		.get(logsController.findById)
}
