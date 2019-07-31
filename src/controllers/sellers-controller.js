const { sellersService } = require('../services/index')

// const find = async (req, res) => {
//   try {
//     const sellers = await sellersService.find()
//     res.status(200).send(sellers)
//   } catch (error) {
//     console.log(error)
//     res.status(500).send({ message: 'Error. Could not get sellers' })
//   }
// }

const findById = async (req, res) => {
  try {
    const seller = await sellersService.findById(req.user.sellerId)
    res.status(200).send(seller)
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Error. Could not get sellers' })
  }
}

const update = async (req, res) => {
  try {
    const { body } = req
    const response = await sellersService.update(req.user.sellerId, body)
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Error. Could not get sellers' })
  }
}

module.exports = {
  findById,
  update
}
