const client = require("../models/client");
const controller = {}

controller.getAll = async (req, res) => {
    try{
        let clients = await client.findAll()
        res.status(200).json(clients)
    }catch(error){
        res.status(500).json(error)
    }
};

controller.getById = async (req, res) => {
   
    try{
        const Client = await client.findByPk(req.params.id)
        res.status(200).json(Client)
    }catch(error){
        res.status(422).json("Ocorreu um erro ao buscar o item. ", + error)
    }
};

controller.getByIdCidade = async (req, res) => {
    let cidades = req.params.cidade
    try{
        let cidade = await client.findAll({
            where:{
                cidade: cidades
            }
        })
        res.status(200).json(cidade)
    }catch(error){
        res.status(500).json(error)
    }
};

controller.create = async (req, res) => {
    let reqClient = req.body

    try{
        const newClient = await client.create({

            nome: reqClient.nome,
            email: reqClient.email,
            cidade: reqClient.cidade,
            estado: reqClient.estado,
            cep: reqClient.cep

        })
        res.status(200).redirect('/get')
    }catch(error){
        res.status(422).json("Ocorreu um erro em cadastrar o item. ", + error)
    }
};

controller.update = async (req, res) => {  
    try{
        let updateClient = await client.findByPk(req.params.id)
        updateClient.nome = req.body.nome
        updateClient.email = req.body.email
        updateClient.cidade = req.body.cidade
        updateClient.estado = req.body.estado
        updateClient.cep = req.body.cep

        await updateClient.save()
        res.status(200).redirect("/get")
    }catch(error){
        res.status(422).json("Ocorreu um erro ao atualizar o item. ", + error)
    }
};

controller.delete = async (req, res) => {
    try{
        let cliente = await client.findByPk(req.params.id)
        await cliente.destroy()
        res.status(200).redirect("/get")
    }catch(error){
        res.status(422).json("Ocorreu um erro ao deletar o item. ", + error)
    }

};

module.exports = controller