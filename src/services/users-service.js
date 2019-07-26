const { userRepository } = require('../repositories/index')

const create = async data => {
  try {
    return userRepository.create(data)
  } catch (error) {
    console.log('Error! Could not create user.')
    throw error
  }
}

const find = async () => {
  try {
    return userRepository.find()
  } catch (error) {
    console.log('Error! Could not find users.')
    throw error
  }
}

const findById = async _id => {
  try {
    return userRepository.findById(_id)
  } catch (error) {
    console.log('Error! Could not find user.')
    throw error
  }
}

const update = async data => {
  try {
    return userRepository.update(data)
  } catch (error) {
    console.log('Error! Could not update user.')
    throw error
  }
}

const remove = async _id => {
  try {
    return userRepository.remove(_id)
  } catch (error) {
    console.log('Error! Could not update user.')
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
