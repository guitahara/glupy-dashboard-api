const { axiosLogs } = require('../infrastructure/axios/index')

const find = async () => {
  const response = axiosLogs.get('/')
  return response.data
}

const findById = async id => {
  const response = axiosLogs.get(`/${id}`)
  return response.data
}

module.exports = {
  find,
  findById
}
