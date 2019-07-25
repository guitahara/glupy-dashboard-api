const {axiosCustomer} = require('../infrastructure/axios/index')

const find = async () => {
  try {
    let response = await axiosCustomer.get('/')
    return response.data
  } catch (error) {
    throw error
  }
}

const findById = async id => {
  try {
    let response = await axiosCustomer.get(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

const update = async (id, data) => {
  try {
    let response = await axiosCustomer.put(`/${id}`, data)
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