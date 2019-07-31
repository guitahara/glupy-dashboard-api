const { axiosOrders } = require('../infrastructure/axios/index')

const find = async () => {
  const response = await axiosOrders.get('/')
  return response.data
}

const findById = async id => {
  const response = await axiosOrders.get(`/${id}`)
  return response.data
}

module.exports = {
  find,
  findById
}
