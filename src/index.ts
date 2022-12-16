import * as dotenv from 'dotenv'
dotenv.config()

const app = require('./server')

app.listen(config.port, () => {
  console.log('server running on https://localhost:3000')
})