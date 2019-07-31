const { User } = require('../models/index')
const { ObjectId } = require('mongoose').Types

const create = async data => {
  const user = new User(data)
  return user.save()
}

const findById = async _id => {
  return User.findOne({ _id: new ObjectId(_id) })
}

const find = async (filter = {}) => {
  return User.find(filter)
}

const update = async data => {
  const user = new User(data)
  user.isNew = false
  return user.save()
}

const remove = async (_id, sellerId) => {
  return User.deleteOne({ _id: new ObjectId(_id), sellerId })
}

module.exports = {
  create,
  find,
  findById,
  update,
  remove
}
