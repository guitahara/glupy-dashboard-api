const { customersService } = require('../services/index')

const find = async (req,res) => {
  try {
    const customers = await customersService.find()
    res.status(200).send(customers)
  } catch (error) {
    res.status(500).send({message: 'Error. Could not get customers'})
  }
}

const findById = async (req,res) => {
  try {
    const {id} = req
    const customer = await customersService.findById(id)
    res.status(200).send(customer)
  } catch (error) {
    res.status(500).send({message: 'Error. Could not get customers'})
  }
}

const update = async (req,res) => {
  try {
    const {params, body} = req
    const response = await customersService.update(params.id, body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send({message: 'Error. Could not get customers'})
  }
}

module.exports = {
  find,
  findById,
  update
}