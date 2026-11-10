const db = require('./db/conn')
const {cliente, fornecedor, movimento, produto} = require('./models/rell')
async function syncDB(){
    try{
        await db.sync({force: true}) 
        console.log('conectando')
    }catch(err){
        console.log(err)
    }finally{
        await db.close()
        console.log('   ...')
    }
}
syncDB()