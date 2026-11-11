const Movimento = require("../models/Movimento");

const cadastrarMovimento = async (req, res) => {
    const valores = req.body

    if(!valores.idproduto || !valores.tipo || !valores.quantidade || !valores.data) return res.status(400).json({message: 'todos os campos sao obrigatorios'})

    try{
        await Movimento.create(valores)
        res.status(201).json({message: 'Movimento cadastrado com sucesso'})
    }catch(err){ 
        console.error(err)
        res.status(500).json({message: 'erro ao cadastrar Movimento'})
    }
}

module.exports = {cadastrarMovimento}