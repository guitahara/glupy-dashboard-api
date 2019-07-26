const { axiosSeller } = require('../infrastructure/axios/index')

const find = async (sellerId, productId) => {
  try {
    const response = await axiosSeller.get(`/${sellerId}/products`)
    return response.data
  } catch (error) {
    throw error
  }
}

const findById = async (sellerId, productId) => {
  try {
    const response = await axiosSeller.get(`/${sellerId}/products/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

const create = async (sellerId, item) => {
  try {
    const response = await axiosSeller.post(`/${sellerId}/products`, item)
    return response.data
  } catch (error) {
    throw error
  }
}

const update = async (sellerId, productId, data) => {
  try {
    const response = await axiosSeller.put(`/${sellerId}/products/${productId}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const remove = async (sellerId, productId, id) => {
  try {
    const response = await axiosSeller.delete(`/${sellerId}/products/${productId}`)
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
