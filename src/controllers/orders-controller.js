const {ordersService} = require('../services/index')

const find = async (req,res) => {
  try {
    const orders = await ordersService.find()
    res.status(200).send(orders)
  } catch (error) {
    res.status(500).send({message: 'Error. Could not get orders'})
  }
}

const findById = async (req,res) => {
  try {
    const {id} = req.params
    const order = await ordersService.findById(id)
    res.status(200).send(order)
  } catch (error) {
    res.status(500).send({message: 'Error. Could not get orders'})
  }
}

module.exports = {
  find,
  findById
}