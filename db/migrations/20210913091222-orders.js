'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('orders', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                tariff_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
            })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('orders')
    }
};
