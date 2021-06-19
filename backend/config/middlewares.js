const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json()) // vai interpretar o json q vai vir no corpo da requisição
    app.use(cors)
}