const { axiosSeller } = require('../infrastructure/axios/index')

const find = async () => {
  try {
    const response = await axiosSeller.get('/')
    return response.data
  } catch (error) {
    throw error
  }
}

const findById = async id => {
  try {
    const response = await axiosSeller.get(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

const update = async (id, data) => {
  try {
    const response = await axiosSeller.put(`/${id}`, data)
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
