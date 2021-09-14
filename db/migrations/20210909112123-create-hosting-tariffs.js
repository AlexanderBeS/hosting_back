'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('hosting_tariffs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            nvm_size: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            ssl: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            max_sites: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            memory_limit: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            cost: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('hosting_tariffs')
    }
};
