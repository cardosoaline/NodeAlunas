const express = require('express')
const router = express.Router()
/*const alunas = require('../model/alunas.json')*/
const controller = require ('../controllers/alunasController')

router.get('/', controller.get)
router.get ('/nasceuSp', controller.getSp)
/*router.get('/', function(request, response){
    response.status(200).send(alunas)
}) */ //tiramos pq o controller puxa isso agora
router.get ('/:id', controller.getById)
router.get ("/:id/books", controller.getBooks)
router.get ('/:id/getIdade', controller.getIdade)
router.post("/", controller.post)
router.post("/:id/books", controller.postBooks) //rotas que será chamado na api.

module.exports =  router