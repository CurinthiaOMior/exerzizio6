const btnlogar = document.getElementById('btnlogar')
const resposta = document.getElementById('resposta')

btnlogar.addEventListener('click', async (e)=>{
    e.preventDefault()

    const valores ={
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    }

    try{
    const res = await fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(valores)
    })
    const dados = await res.json()
    resposta.innerHTML = dados.message
    if(dados.token){
        localStorage.setItem("token", dados.token)
        localStorage.setItem("nome", dados.nome)
    }
    }catch(err){
        resposta.innerHTML = err.message
        console.log(err)
    }
})