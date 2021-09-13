const Sequelize = require('sequelize')
const db = require('../db/db-connection.js')
const User = require('../models/users');
const Tariff = require('../models/hostingTariffs');

const Order = db.define('orders', {
        user_id: {
            type: Sequelize.NUMBER,
            allowNull: false,
        },
        tariff_id: {
            type: Sequelize.NUMBER,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: true
    }
)

Order.belongsTo(User, {as: 'Order', foreignKey: 'user_id'});

Order.belongsTo(Tariff, {
    foreignKey: 'tariff_id'
})

User.hasOne(Order, {
    foreignKey: 'user_id'
});

Tariff.hasMany(Order, {
    foreignKey: 'tariff_id'
})

module.exports = Order
