const CryptoJS = require('crypto-js')
const secretkey = 'aaa'

function authMiddleware(req,res,next){
    const token = req.headers['authorization']
    if(!token) return res.status(401).json({message: 'token nao fornecido'})

        try{
            const bytes = CryptoJS.AES.decrypt(token, secretkey)
            const dadoscriptografados = bytes.toString(CryptoJS.enc.Utf8)

            if(!dadoscriptografados) return res.status(401).json({message: 'token invalido'})

            const payload = JSON.parse(dadoscriptografados)

            if(!payload || !Number.isInteger(payload.idCliente) || payload.idCliente <=0 || !Number.isFinite(payload.Expiraem)) return res.status(401).json({message: 'token invalido'})

            req.usuario = payload
            next()
        }catch(err){
            console.log(err)
            return res.status(401).json({message: 'falha na autenticação'})
        }
}
module.exports = authMiddleware