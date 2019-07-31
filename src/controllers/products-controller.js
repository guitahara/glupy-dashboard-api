const { productsService } = require('../services/index')

const find = async (req, res) => {
  try {
    const { productId } = req.params
    const products = await productsService.find(req.user.sellerId, productId)
    res.status(200).send(products)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get products' })
  }
}

const findById = async (req, res) => {
  try {
    const { productId } = req.params
    const product = await productsService.findById(req.user.sellerId, productId)
    res.status(200).send(product)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get product' })
  }
}

const create = async (req, res) => {
  try {
    const { body } = req
    const response = await productsService.create(req.user.sellerId, body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not create product' })
  }
}

const update = async (req, res) => {
  try {
    const { params, body } = req
    const response = await productsService.update(req.user.sellerId, params.productId, body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not update product' })
  }
}

const remove = async (req, res) => {
  try {
    const { productId } = req.params
    const response = await productsService.remove(req.user.sellerId, productId)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not delete product' })
  }
}

module.exports = {
  find,
  findById,
  update,
  create,
  remove
}
