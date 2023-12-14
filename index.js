const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT;
var cors = require('cors')

//MIDDLEWARE
app.use(cors())
app.use(express.json())


//API ROUTES
app.use('/api', require('./router/users'))

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))