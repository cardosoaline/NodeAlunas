const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
    
}

exports.getById = (req, res) => {
    const id = req.params.id //
    

    if(id > 17 || id <= 0){
       // res.send("id não é valido!")
       res.redirect(301,"https://www.uol.com.br/")
    }        
    res.status(200).send(alunas.find(aluna => aluna.id == id))
  
    
}

exports.getBooks = (req,res) =>{
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)

    //Comando abaixo quer dizer se não tiver aluna valores falsos/exemplo um id a mais.
    if(!aluna){
      res.send("Não encontrei essa garota")
    }

    const LivrosAlunas = aluna.Livros
    const LivrosLidos = LivrosAluna.filter(Livro => Livro)
    

    res.status(200).send('')

}

exports.getSp = (req,res) => {
    const id = req.params.id
    const sp = alunas.filter(aluna => aluna.nasceuEmSP == true)

    console.log(sp)
   
}