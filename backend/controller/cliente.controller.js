const Cliente = require("../models/Cliente");
const CryptoJS = require('crypto-js')
const secretkey = 'aaa'


const cadastrar = async(req,res)=>{
    const valores = req.body
    if(!valores.email || !valores.senha || !valores.nome || !valores.cpf) return res.status(400).json({message: 'todos os campos sao obrigatorios'})
        try{
        const cpfcript = CryptoJS.AES.encrypt(valores.cpf, secretkey).toString()
        const senhacript = CryptoJS.AES.encrypt(valores.senha, secretkey).toString()

            await Cliente.create({nome: valores.nome, email: valores.email, cpf: cpfcript, senha: senhacript})

            return res.status(201).json({message: 'dados cadastrados'})
        }catch(err){
            console.error(err)
            res.status(500).json({message: 'erro ao cadastrar dados'})
        }
}
module.exports = {cadastrar}