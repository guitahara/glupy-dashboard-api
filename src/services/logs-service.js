const {axiosLogs} = require('../infrastructure/axios/index')

const find = async () => {
  let response = axiosLogs.get('/')
  return response.data
}

const findById = async id => {
  let response = axiosLogs.get(`/${id}`)
  return response.data
}

module.exports = {
  find,
  findById
}