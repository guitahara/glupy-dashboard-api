const { listsService } = require('../services/index')

const find = async (req, res) => {
  try {
    const { storeId } = req.params
    const sellers = await listsService.find(req.user.sellerId, storeId)
    res.status(200).send(sellers)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get list product' })
  }
}

const create = async (req, res) => {
  try {
    const { params, body } = req
    const response = await listsService.create(req.user.sellerId, params.storeId, body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not create list product' })
  }
}

const update = async (req, res) => {
  try {
    const { params, body } = req
    const response = await listsService.update(req.user.sellerId, params.storeId, params.id, body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not update list product' })
  }
}

const remove = async (req, res) => {
  try {
    const { storeId, id } = req.params
    const response = await listsService.remove(req.user.sellerId, storeId, id)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not delete list product' })
  }
}

module.exports = {
  find,
  update,
  create,
  remove
}
