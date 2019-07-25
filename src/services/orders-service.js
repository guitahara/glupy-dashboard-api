const {axiosOrders} = require('../../infrastructure/axios/index')

const find = async () => {
  try {
    let response = await axiosOrders.get('/')
    return response.data
  } catch (error) {
    
  }
}

const findById = async id => {
  try {
    let response = await axiosOrders.get(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  find,
  findById
}