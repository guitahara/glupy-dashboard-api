const mongoose = require('mongoose')
mongoose.set('debug', process.env.NODE_ENV === 'prod')

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION || 'mongodb://root:dummy_pass@localhost:27017/glupy?authSource=admin', {
      useNewUrlParser: true,
      auth: { authdb: 'admin' }
    })
    console.log('connected do db')
  } catch (error) {
    console.log('\x1b[33m%s\x1b[0m', 'Error while connecting to mongodb: ', error)
    throw error
  }
}

module.exports = {
  connection
}
