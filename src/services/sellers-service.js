const {axiosSeller} = require('../infrastructure/axios/index')

const find = async () => {
  try {
    let response = await axiosSeller.get('/')
    return response.data
  } catch (error) {
    throw error
  }
}

const findById = async id => {
  try {
    let response = await axiosSeller.get(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

const update = async (id, data) => {
  try {
    let response = await axiosSeller.put(`/${id}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  find,
  findById,
  update
}