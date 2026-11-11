const Fornecedor = require("../models/Fornecedor");
const crypto = require('crypto-js')

const cadastrarFornecedor = async (req, res) => {
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.cnpj|| !valores.cpf) return res.status(400).json({message: 'todos os campos sao obrigatorios'})

    try{
        const cpfcript = crypto.AES.encrypt(valores.cpf, 'aaa').toString
        const cnpjcript = crypto.AES.encrypt(valores.cnpj, 'aaa').toString

        await Fornecedor.create({nome: valores.nome, email: valores.email, cpf: cpfcript, cnpj: cnpjcript})
        res.status(201).json({message: 'fornecedor cadastrado com sucesso'})
    }catch(err){ 
        console.error(err)
        res.status(500).json({message: 'erro ao cadastrar fornecedor'})
    }
}

module.exports = {cadastrarFornecedor}