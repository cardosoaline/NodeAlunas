  
const express =  require('express')
const app = express()

//rotas
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')
const professoras = require('./routes/professorasRoute')

app.use(express.json())

app.use(function(require, response,next){
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


app.use("/", index  )
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app