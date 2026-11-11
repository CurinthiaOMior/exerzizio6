const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const db = require('./db/conn')

const authMiddleware = require('./middleware/auth.middleware')
const authcontroller = require('./controller/auth.controller')
const clientecontroller = require('./controller/cliente.controller')
const produtocontroller = require('./controller/produto.controller')
const fornecedorcontroller = require('./controller/fornecedor.controller')
const movimentocontroller = require('./controller/movimento.controller')

// middleware

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// 

app.post('/cliente', clientecontroller.cadastrar)
app.post('/login', authcontroller.login)

app.use(authMiddleware)

app.post('/produto', produtocontroller.cadastrarProduto)
app.post('/movimento', movimentocontroller.cadastrarMovimento)
app.post('/fornecedor', fornecedorcontroller.cadastrarFornecedor)

app.get('/fornecedor/:id', fornecedorcontroller.consultar)
app.get('/fornecedor/nome/nome/:', fornecedorcontroller.consultarNome)
app.put('/fornecedor/:id', fornecedorcontroller.atualizar)
app.delete('/fornecedor/:id', fornecedorcontroller.apagar)

db.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log('servidor rodando')
        })
    })
    .catch((err)=>{
        console.log('erro ao rodar o servidor',err)
    })