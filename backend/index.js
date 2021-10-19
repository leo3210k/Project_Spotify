const express = require('express')
const consign = require('consign')
const db = require('./config/db')

const app = express()

app.use(express.json())
app.db = db // knex com as configurações passadas

consign()
    //.include('./config/passport.js')
    //.then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(4000, () => {
    console.log('Backend executando1...')
})