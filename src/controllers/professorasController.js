const professoras = require("../model/professoras.json")

exports.get = (request, response) => {
    console.log(request.url)
    response.status(200).send(professoras)
}

/* FORMA DE FAZER COM FOR:
exports.get = (require, response) = > {
    const arrProfs =[]
    for (let = 0; i <professoras.length; i++) {
        const semCpf = {}
        semCpf.id = professoras[i].id
        semCpf.nome = professoras[i].nome
        semCpf.especialidade = professoras[i].especialidade
        semCpf.signo = professoras[i].
        arrProfs.push(semcpf)
    }
    response.status(200).send(arrProfs)
}
*/

//MODO DE FAZER COM MAP:
exports.get = (request, response)=> {
    const profSemCpf = professoras.map(item => {
        item.cpf = '************';
        return item;
    })
    response.status(200).send(profSemCpf)
}

/*
exports.getById = (request, response) => {
    const id = request.params.id
    const profId = professoras.find(professora => professora.id == id)
    const profSemCpf = professoras.map(item => {
        delete item.cpf
        return item
    })
    response.status(200).send(profId)
}
*/

exports.getById = (request, response) => {
    const id = request.params.id
    const profId = professoras.find(professora => professora.id == id)      
    delete prof.cpf
    response.status(200).send(profId)
}