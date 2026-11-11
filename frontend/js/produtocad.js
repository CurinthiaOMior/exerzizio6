const btncadastrar = document.getElementById('btncadastrar')
const resposta = document.getElementById('resposta')

btncadastrar.addEventListener( 'click', async (e) =>{
    e.preventDefault()
    const valores = {
        idfornecedor: document.getElementById('idfornecedor').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        quantidade: document.getElementById('quantidade').value,
        codLote: document.getElementById('codLote').value,
        }

    try{
        const res = await fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {'Content-type':'application/json',
                 'authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(valores),
    })
    const dados = await res.json()
    resposta.innerHTML = dados.message
    }catch(err){
        resposta.innerHTML = err.message 
        console.log(err)
    }
})