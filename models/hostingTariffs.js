const Sequelize = require('sequelize')
const db = require('../db/db-connection.js')

const hostingTariff = db.define('hosting_tariffs', {
        name: {
            type: Sequelize.STRING(100),
            required: true
        },
        nvm_size: {
            type: Sequelize.NUMBER,
            required: true
        },
        ssl: {
            type: Sequelize.BOOLEAN,
            required: true
        },
        max_sites: {
            type: Sequelize.NUMBER,
            required: true
        },
        memory_limit: {
            type: Sequelize.NUMBER,
            required: true
        },
        cost: {
            type: Sequelize.NUMBER,
            required: true
        }
    },
    {
        createdAt: true,
        updatedAt: true
    })


module.exports = hostingTariff
