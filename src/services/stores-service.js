const {axiosSeller} = require('../infrastructure/axios/index')

const find = async (sellerId) => {
  try {
    let response = await axiosSeller.get(`/${sellerId}/stores/`)
    return response.data
  } catch (error) {
    throw error
  }
}

const findById = async (sellerId, storeId) => {
  try {
    let response = await axiosSeller.get(`/${sellerId}/stores/${storeId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

const create = async (sellerId, store) => {
  try {
    let response = await axiosSeller.post(`/${sellerId}/stores`, store)
    return response.data
  } catch (error) {
    throw error
  }
}

const update = async (sellerId, storeId, data) => {
  try {
    let response = await axiosSeller.put(`/${sellerId}/stores/${storeId}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const remove = async (sellerId, storeId) => {
  try {
    let response = await axiosSeller.delete(`/${sellerId}/stores/${storeId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  find,
  findById,
  create,
  update,
  remove
}
