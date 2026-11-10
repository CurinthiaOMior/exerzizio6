const btncadastrar = document.getElementById('btncadastrar')
const resposta = document.getElementById('resposta')

btncadastrar.addEventListener( 'click', async (e) =>{
    e.preventDefault()
    const valores = {
        nome: document.getElementById('nome').values,
        email: document.getElementById('email').values,
        senha: document.getElementById('senha').values,
        cpf: document.getElementById('cpf').values
    }

    try{
        const res = await fetch('http://localhost:3000/cliente', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(valores)
    })
    const dados = await res.json()
    resposta.innerHTML = dados.message
    }catch(err){
        resposta.innerHTML = err.message 
        console.log(err)
    }
})