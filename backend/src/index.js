const express  = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('urlToDB', {
  useNewUrlParser: true
})

app.listen(3000)