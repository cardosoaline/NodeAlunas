// const express = require("express")   ////NAO PRECISA MAIS QDO JA TEM NO APP.JS
// const app = express()

const app = require('./src/app')
const port = 3000


// app
// .use('/', function(request, response){
//     console.log('URL:', request.url)
//     response.status(200).send('Fala ae Bruxão')    //////////NAO PRECISA MAIS PQ TEM O USE NO APP.JS
// })
// .listen(3000) //seleciona a porta do localhost q vai rodar essa aplicacao

app.listen(port, function(){
    console.log(`app esta rodando na porta ${port}`)

})
    



