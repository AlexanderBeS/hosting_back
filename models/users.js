const Sequelize = require('sequelize')
const db = require('../db/db-connection.js')
const Order = require('../models/orders');

const User = db.define('users', {
        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        order_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        createdAt: true,
        updatedAt: true
    }
)

User.validPassword = (password, passwordFromDb) => {
    return (password === passwordFromDb)
}

User.hasOne(Order, {
    foreignKey: 'order_id'
})




module.exports = User
