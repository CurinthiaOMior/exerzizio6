const btncadastrar = document.getElementById('btncadastrar')
const resposta = document.getElementById('resposta')

btncadastrar.addEventListener( 'click', async (e) =>{
    e.preventDefault()
    const valores = {
        idproduto: document.getElementById('idproduto').value,
        tipo: document.getElementById('tipo').value,
        quantidade: document.getElementById('quantidade').value,
        data: document.getElementById('data').value,
        }

    try{
        const res = await fetch('http://localhost:3000/movimento', {
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