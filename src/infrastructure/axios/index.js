const axios = require('axios')

const axiosSeller = axios.create({
  baseURL: process.env.SELLER_API || 'https://glupy-backend.herokuapp.com/sellers'
})

const axiosCustomer = axios.create({
  baseURL: process.env.CUSTOMER_API || 'https://glupy-backend.herokuapp.com/customers'
})

const axiosOrders = axios.create({
  baseURL: process.env.ORDERS_API || 'https://glupy-backend.herokuapp.com/orders'
})

const axiosLogs = axios.create({
  baseURL: process.env.LOGS_API || 'https://glupy-backend.herokuapp.com/logs'
})

module.exports = {
  axiosSeller,
  axiosCustomer,
  axiosOrders,
  axiosLogs
}
