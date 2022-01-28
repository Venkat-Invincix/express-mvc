const express = require('express')
const app = express()
const configureDB = require('./config/database')
const router = require('./config/routes')
const PORT = 3001

// db setUp
configureDB()

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log('app is running on port', PORT)
})