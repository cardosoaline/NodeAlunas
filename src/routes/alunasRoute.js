const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')   ///NAO PRECISA MAIS PQ TEM NO CONTROLLER.JS
const controller = require('../controllers/alunasController')

// router.get('/', function(req, res){
//     res.status(200).send(alunas)
// })

router.get('/', controller.get)  //GET NESSE CASO É O NOME DA FUNCAO DEFINIDA NO CONTROLLER (NO EXPORTS)
router.get('/nasceuSp',controller.getSp)
router.get('/:id', controller.getById) //QUERY PARAMS É O :ID
router.get("/:id/books",controller.getBooks)


//suteste é criar um controller 
module.exports = router