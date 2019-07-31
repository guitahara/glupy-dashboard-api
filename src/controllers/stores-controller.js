const { storesService } = require('../services/index')

const find = async (req, res) => {
  try {
    const sellers = await storesService.find(req.user.sellerId)
    res.status(200).send(sellers)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get list product' })
  }
}

const findById = async (req, res) => {
  try {
    const { storeId } = req.params
    const sellers = await storesService.findById(req.user.sellerId, storeId)
    res.status(200).send(sellers)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get list product' })
  }
}

const create = async (req, res) => {
  try {
    const { body } = req
    const response = await storesService.create(req.user.sellerId, body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not create list product' })
  }
}

const update = async (req, res) => {
  try {
    const { params, body } = req
    const response = await storesService.update(req.user.sellerId, params.storeId, body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not update list product' })
  }
}

const remove = async (req, res) => {
  try {
    const { storeId } = req.params
    const response = await storesService.remove(req.user.sellerId, storeId)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not delete list product' })
  }
}

module.exports = {
  find,
  findById,
  update,
  create,
  remove
}
