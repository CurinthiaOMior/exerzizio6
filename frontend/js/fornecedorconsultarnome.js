const btn = document.getElementById('btn')
const resposta = document.getElementById('resposta')

btn.addEventListener('click', async (e)=>{
    e.preventDefault()
        const nome = document.getElementById('nome').value

        try{
            const res = await fetch(`http://localhost:3000/fornecedor/nome/${nome}`, {
                method: 'GET',
                headers: {
                    'Content-type':'application/json',
                    'authorization':localStorage.getItem('token')
                }
            })
            const dados = await res.json()
            resposta.innerHTML = dados.message
        }catch(err){
            resposta.innerHTML = err.message
            console.err
        }
})