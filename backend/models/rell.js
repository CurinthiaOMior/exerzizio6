const cliente = require("./Cliente");
const fornecedor = require("./Fornecedor");
const movimento = require("./Movimento");
const produto = require("./Produto");

fornecedor.hasMany(produto, {
    foreignKey: 'idfornecedor',
    as: 'fornecedorproduto',
    onDelete: 'CASCADE'
})
produto.belongsTo(fornecedor, {
    foreignKey: 'idfornecedor',
    as: 'produtofornecedor'
})

produto.hasMany(movimento, {
    foreignKey: 'idproduto',
    as: 'produtomovimento',
    onDelete: 'CASCADE'
})
movimento.belongsTo(produto, {
    foreignKey: 'idproduto',
    as: 'movimentoproduto'
})

module.exports = {cliente, fornecedor, movimento, produto}