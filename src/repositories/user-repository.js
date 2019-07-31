const { User } = require('../models/index')
const { ObjectId } = require('mongoose').Types

const create = async data => {
  try {
    const user = new User(data)
    return user.save()
  } catch (error) {
    throw error
  }
}

const findById = async _id => {
  try {
    return User.findOne({ _id: new ObjectId(_id) })
  } catch (error) {
    throw error
  }
}

const find = async (filter = {}) => {
  try {
    return User.find(filter)
  } catch (error) {
    throw error
  }
}

const update = async data => {
  try {
    const user = new User(data)
    user.isNew = false
    return user.save()
  } catch (error) {
    throw error
  }
}

const remove = async (_id, sellerId) => {
  try {
    return User.deleteOne({ _id: new ObjectId(_id), sellerId })
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
  find,
  findById,
  update,
  remove
}
