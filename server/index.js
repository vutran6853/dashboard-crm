require('dotenv').config()
const express = require('express')
const PORT = 3020
const cors = require('cors')
const app = express()
const massive = require('massive')

const { register, login, updateEmail, updatePassword } = require('./controller/authController')
const { contacts } = require('./controller/contactsController')
const { postDailySpend } = require('./controller/spendController')
const { userHistoryInfo } = require('./controller/grapicController')
const { 
  postHouseUtites, 
  postHousePayment, 
  getHouseHistory, 
  postRoomPayment, 
  getHouseUtitlesOverall,
  getHouseUtitlesAll } = require('./controller/houseController')

app.use(cors())
app.use(express.json())

// Middleware Connect To Postgre Database
massive(process.env.CONNECT_STRING)
.then((dbInstance => {
  app.set('db', dbInstance)
}))
.catch((err) => console.log('unable to connect to database', err))

// Endpoint
app.post('/api/register', register)
app.post('/api/login', login)

app.get('/api/contacts', contacts)
app.get('/api/graphic/:id', userHistoryInfo)
app.get('/api/house/history/:id', getHouseHistory)
app.get('/api/house/history/utitles/overall/:id', getHouseUtitlesOverall)
app.get('/api/house/history/utitles/all/:id', getHouseUtitlesAll)

app.put('/api/update/email', updateEmail)
app.put('/api/update/password', updatePassword)

app.post('/api/spend/daily', postDailySpend)
app.post('/api/house', postHouseUtites)
app.post('/api/house/payment', postHousePayment)
app.post('/api/room/payment', postRoomPayment)


app.listen(PORT, () => console.log('API server is UP and listen to port:', PORT))