const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    codProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idfornecedor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'fornecedores',
            key: 'codFornecedor'
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    codLote: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'produtos',
    timestamps: false
})
module.exports = Produto