const btncadastrar = document.getElementById('btncadastrar')
const resposta = document.getElementById('resposta')

btncadastrar.addEventListener( 'click', async (e) =>{
    e.preventDefault()
    const valores = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('cnpj').value,
        cpf: document.getElementById('cpf').value
    }

    try{
        const res = await fetch(`http://localhost:3000/fornecedor/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type':'application/json',
            'authorization':localStorage.getItem('token')     
        },
        body: JSON.stringify(valores)
    })
    const dados = await res.json()
    resposta.innerHTML = dados.message
    }catch(err){
        resposta.innerHTML = err.message 
        console.log(err)
    }
})