const { logsService } = require('../services/index')

const find = async (req, res) => {
  try {
    const logs = await logsService.find()
    res.status(200).send(logs)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get logs' })
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params
    const log = await logsService.findById(id)
    res.status(200).send(log)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get log' })
  }
}

module.exports = {
  find,
  findById
}
