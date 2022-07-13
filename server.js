const express = require('express')
const Routes_user = require ('./routes/Routes_user')
const connectDB = require('./config/connectDB')

require ('dotenv').config({path:"./config/.env"})

const app = express()
app.use(express.json())

connectDB()
app.use('/users', Routes_user)


const port = 4000
app.listen(port, () => console.log(`app server listening on port ${port}!`))