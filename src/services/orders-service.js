const { axiosOrders } = require('../infrastructure/axios/index')

const find = async () => {
  try {
    const response = await axiosOrders.get('/')
    return response.data
  } catch (error) {

  }
}

const findById = async id => {
  try {
    const response = await axiosOrders.get(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  find,
  findById
}
