const btncadastrar = document.getElementById('btncadastrar')
const resposta = document.getElementById('resposta')

btncadastrar.addEventListener( 'click', async (e) =>{
    e.preventDefault()
    const valores = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        cnpj: document.getElementById('cnpj').value,
        }

    try{
        const res = await fetch('http://localhost:3000/fornecedor', {
        method: 'POST',
        headers: {'Content-type':'application/json',
                 'authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(valores),
        'authorization': localStorage.getItem('token')
    })
    const dados = await res.json()
    resposta.innerHTML = dados.message
    }catch(err){
        resposta.innerHTML = err.message 
        console.log(err)
    }
})