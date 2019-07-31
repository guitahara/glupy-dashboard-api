const { userService } = require('../services/index')

const find = async (req, res) => {
  try {
    const users = await userService.find({ sellerId: req.user.sellerId })
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send({ message: 'Error. Could not get products' })
  }
}

const findById = async (req, res) => {
  try {
    const { _id } = req.params
    const user = await userService.findById({ _id, sellerId: req.user.sellerId })
    res.status(200).send(user)
  } catch (error) {
    console.log(error.stack)
    res.status(500).send({ message: 'Error. Could not get product' })
  }
}

const create = async (req, res) => {
  try {
    const { body } = req
    body.sellerId = req.user.sellerId
    const response = await userService.create(body)
    res.status(200).send(response)
  } catch (error) {
    console.log(error.stack)
    res.status(500).send({ message: 'Error. Could not create user' })
  }
}

const update = async (req, res) => {
  try {
    const { body } = req
    body.sellerId = req.user.sellerId
    const response = await userService.update(body)
    res.status(200).send(response)
  } catch (error) {
    console.log(error.stack)
    res.status(500).send({ message: 'Error. Could not update product' })
  }
}

const remove = async (req, res) => {
  try {
    const { _id } = req.params
    const response = await userService.remove(_id, req.user.sellerId)
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
