'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('users', {
            fields: ['order_id'],
            type: 'foreign key',
            name: 'users_order_id',
            references: {
                table: 'orders',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'set null'
        }).then(() => {
            return queryInterface.addConstraint('orders', {
                fields: ['user_id'],
                type: 'foreign key',
                name: 'order_user_id',
                references: {
                    table: 'users',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            })
        }).then(() => {
            return queryInterface.addConstraint('orders', {
                fields: ['tariff_id'],
                type: 'foreign key',
                name: 'order_tariff_id',
                references: {
                    table: 'hosting_tariffs',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            })
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('users', 'users_order_id')
            .then(() => {
                return queryInterface.removeConstraint('orders', 'order_user_id')
            })
            .then(() => {
                return queryInterface.removeConstraint('orders', 'order_tariff_id')
            })
    }
};
