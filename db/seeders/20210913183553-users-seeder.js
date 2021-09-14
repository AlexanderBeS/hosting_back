'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                name: 'admin',
                email: 'admin@gmail.com',
                password: 'testpassword',
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
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
