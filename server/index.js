require('dotenv').config()
const express = require('express')
const PORT = 3020
const cors = require('cors')
const app = express()
const { login } = require('./controller/login')

app.use(cors())
app.use(express.json())

app.put('/api/login', login)


app.listen(PORT, () => console.log('API server is UP and listen to port: ', PORT))