const {axiosSeller} = require('../infrastructure/axios/index')

const find = async (sellerId, storeId) => {
  try {
    let response = await axiosSeller.get(`/${sellerId}/stores/${storeId}/products`)
    return response.data
  } catch (error) {
    throw error
  }
}

const create = async (sellerId, storeId, item) => {
  try {
    let response = await axiosSeller.post(`/${sellerId}/stores/${storeId}/products`, item)
    return response.data
  } catch (error) {
    throw error
  }
}

const update = async (sellerId, storeId, id, data) => {
  try {
    let response = await axiosSeller.put(`/${sellerId}/stores/${storeId}/products/${id}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const remove = async (sellerId, storeId, id) => {
  try {
    let response = await axiosSeller.delete(`/${sellerId}/stores/${storeId}/products/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  find,
  create,
  update,
  remove
}
