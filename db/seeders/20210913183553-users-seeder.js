'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = [
            {
                name: 'admin',
                email: 'admin@gmail.com',
                password: 'adminpassword',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vasya',
                email: 'vasya@gmail.com',
                password: 'vasyapassword',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Petya',
                email: 'petya@gmail.com',
                password: 'petyapassword',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Masha',
                email: 'masha@gmail.com',
                password: 'mashaspassword',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]

        for (let user of users) {
            user.password = await bcrypt.hash(user.password, 12)
        }

        return queryInterface.bulkInsert('users', users);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
