const Cliente = require("../models/Cliente");
const CryptoJS = require('crypto-js')
const secretkey = 'aaa'

const login = async(req,res)=>{
    const valores = req.body 

    if(!valores.email || !valores.senha) return res.status(401).json({message: 'todos os campos sao obrigatorios'})

    try{
        const cliente = await Cliente.findOne({where: {email: valores.email}})

        if(!cliente) return res.status(404).json({message: 'usuario inexistente'})

        const bytes = CryptoJS.AES.decrypt(cliente.senha, secretkey)
        console.log(bytes)
        const senhadb = bytes.toString(CryptoJS.enc.Utf8)
        console.log(senhadb)

        if(valores.senha !== senhadb) return res.status(401).json({message: 'senha incorreta'})

        const tempo = 240 * 60 * 60 * 1000
        const tempoexpiraem = Date.now() + tempo

        const payload ={idCliente: cliente.codCliente, nome: cliente.nome, Expiraem: tempoexpiraem}

        const token = CryptoJS.AES.encrypt(JSON.stringify(payload), secretkey).toString()

        return res.status(200).json({
            message: 'login realizado',
            token: token,
            nome: cliente.nome
        })
    }catch(err){
    console.error('Erro ao tentar fazer o login:', err)
        return res.status(500).json({ message: 'Erro ao tentar fazer o login!' })
        }
    }
        module.exports = {login}
