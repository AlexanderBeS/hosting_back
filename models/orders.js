const Sequelize = require('sequelize')
const db = require('../db/db-connection.js')
const User = require('../models/users');
const Tariff = require('../models/hostingTariffs');

const Order = db.define('orders', {
        // user_id: {
        //     type: Sequelize.NUMBER,
        //     allowNull: false,
        // },
        // tariff_id: {
        //     type: Sequelize.NUMBER,
        //     allowNull: false,
        // },
    },
    {
        createdAt: true,
        updatedAt: true
    }
)


module.exports = Order
