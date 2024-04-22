const express = require('express')
const app = express()
const cors = require('cors')



const initializeAndListenExpress = () => {
  try {
    app.use(express.json())
      .use(cors())
      .use('/api', require('./api/routes/index'))
      .listen(3000, () => {
        console.log('Server started')
      })
  } catch (error) {
    console.log(error)
  }
}

const startApi = async () => {
  try {
    initializeAndListenExpress()
  } catch (error) {
    console.log(error)
  }
}

startApi()