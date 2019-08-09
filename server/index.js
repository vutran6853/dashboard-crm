require('dotenv').config()
const express = require('express')
const PORT = 3020
const cors = require('cors')
const app = express()
const massive = require('massive')

const { register, login, updateEmail, updatePassword } = require('./controller/auth')
const { contacts } = require('./controller/contacts')
const { postDailySpend } = require('./controller/spend')
const { userHistoryInfo } = require('./controller/grapic')

app.use(cors())
app.use(express.json())

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


app.put('/api/update/email', updateEmail)
app.put('/api/update/password', updatePassword)

app.post('/api/spend/daily', postDailySpend)


app.listen(PORT, () => console.log('API server is UP and listen to port:', PORT))