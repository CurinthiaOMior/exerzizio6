const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const db = require('./db/conn')

const authMiddleware = require('./middleware/auth.middleware')
const authcontroller = require('./controller/auth.controller')
const clientecontroller = require('./controller/cliente.controller')

// middleware

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/cliente', clientecontroller.cadastrar)
app.post('/login', authcontroller.login)

app.use(authMiddleware)

app.get('/cliente/:id', clientecontroller.consultar)
db.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log('servidor rodando')
        })
    })
    .catch((err)=>{
        console.log('erro ao rodar o servidor',err)
    })