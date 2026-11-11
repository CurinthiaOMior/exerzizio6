const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Movimento = db.define('movimento', {
    codMovimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idproduto: {
        type: DataTypes.INTEGER,
        references: {
            model: 'produtos',
            key: 'codProduto'
        }
    },
    tipo: {
        type: DataTypes.ENUM('entrada', 'saida'),
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},{
    tableName: 'movimentos',
    timestamps: false
})
module.exports = Movimento