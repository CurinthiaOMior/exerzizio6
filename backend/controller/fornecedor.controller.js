const { UPDATE } = require("sequelize/lib/query-types");
const Fornecedor = require("../models/Fornecedor");
const crypto = require('crypto-js')

const cadastrarFornecedor = async (req, res) => {
    const valores = req.body

    if(!valores.nome || !valores.cnpj|| !valores.cpf) return res.status(400).json({message: 'todos os campos sao obrigatorios'})

    try{
        const cpfcript = crypto.AES.encrypt(valores.cpf, 'aaa').toString()
        const cnpjcript = crypto.AES.encrypt(valores.cnpj, 'aaa').toString()

        await Fornecedor.create({nome: valores.nome, email: valores.email, cpf: cpfcript, cnpj: cnpjcript})
        res.status(201).json({message: 'fornecedor cadastrado com sucesso'})
    }catch(err){ 
        console.error(err)
        res.status(500).json({message: 'erro ao cadastrar fornecedor'})
    }
}

const consultar = async(req,res)=>{
    const id = req.params.id

    try{
        const fornecedor = await Fornecedor.findByPk(id)
        if(!fornecedor) return res.status(404).json({message: 'fornecedor nao encontrado'})
            res.status(200).json(fornecedor)
    }catch(err){
    console.error(err)
    res.status(500).json({message: 'erro ao consultar dados'})
    }
}

const consultarNome = async(req,res)=>{
    const nome = req.params.nome

    try{
        const fornecedor = await Fornecedor.findOne({where: nome})
        res.status(200).json(fornecedor)
    }catch(err){
    console.error(err)
    res.status(500).json({message: 'erro ao consultar dados'})
    }
}

const atualizar = async(req,res)=>{
    const valores = req.body
    const id = req.params.id

    if(!nome || !cpf || !cnpj) return res.tatus(400).json({message: 'todos os campos sao obrigatorios'})
    
        try{
            const fornecedor = await Fornecedor.findByPk(id)
            if(!fornecedor) res.status({message: 'fornecedor inexistente'})
                const cpfcripto = CryptoJS.AES.encrypt(valores.cpf ,'aaa').toString()
                const cpnjcripto = CryptoJS.AES.encrypt(valores.cpf, 'aaa').toString()
            await fornecedor.update({
                nome: valores.nome,
                cpf: cpfcripto,
                cnpj: cpnjcripto
            })
            }catch(err){
        console.error(err)
        res.status(500).json({message: 'erro ao consultar dados'})
        }
}

const apagar = async(req,res)=>{
    const id = req.params.id
    try{
        const fornecedor = await Fornecedor.findByPk(id)

        if(!fornecedor) return res.status(400).json({message: 'nao tem como excluir um objeto inexistente'})
        
            await fornecedor.destroy()

        }catch(err){

    }

}

module.exports = {cadastrarFornecedor, consultar, consultarNome, atualizar, apagar}