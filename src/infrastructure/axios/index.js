const axios = require('axios')

const axiosSeller = axios.create({
  baseURL: 'https://glupy-backend.herokuapp.com/sellers'
})

const axiosCustomer = axios.create({
  baseURL: 'https://glupy-backend.herokuapp.com/customer'
}) 

const axiosOrders = axios.create({
  baseURL: 'https://glupy-backend.herokuapp.com/orders'
})

const axiosLogs = axios.create({
  baseURL: 'https://glupy-backend.herokuapp.com/logs'
})

module.exports = {
  axiosSeller,
  axiosCustomer,
  axiosOrders,
  axiosLogs
}