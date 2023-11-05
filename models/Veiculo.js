const { Sequelize } = require('sequelize')

const db = require('../db/conn')

const Veiculo = db.define('Veiculo',{
    locadora: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    motor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    portas: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cambio: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ar_condicionado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
})

module.exports = Veiculo