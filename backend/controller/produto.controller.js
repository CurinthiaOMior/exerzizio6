const Produto = require("../models/Produto");
const crypto = require('crypto-js')

const cadastrarProduto = async (req, res) => {
    const valores = req.body

    if(!valores.idfornecedor || !valores.descricao || !valores.categoria || !valores.quantidade || !valores.codLote) return res.status(400).json({message: 'todos os campos sao obrigatorios'})

    try{
        const codcript = crypto.AES.encrypt(valores.codLote, 'aaa').toString()

        await Produto.create({idfornecedor: valores.idfornecedor, descricao: valores.descricao, categoria: valores.categoria, quantidade: valores.quantidade, codLote: codcript})
        res.status(201).json({message: 'Produto cadastrado com sucesso'})
    }catch(err){ 
        console.error(err)
        res.status(500).json({message: 'erro ao cadastrar Produto'})
    }
}

module.exports = {cadastrarProduto}