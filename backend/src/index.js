require('dotenv/config');
const express  = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
})

app.use(require('./routes'))

app.listen(3000)