'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('hosting_tariffs', [{
            name: 'lite',
            nvm_size: 3,
            ssl: false,
            max_sites: 1,
            memory_limit: 512,
            cost: 113.50,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {returning: true}).then(function (users) {
            return queryInterface.bulkInsert('hosting_tariffs', [{
                name: 'medium',
                nvm_size: 10,
                ssl: false,
                max_sites: 5,
                memory_limit: 1024,
                cost: 200,
                createdAt: new Date(),
                updatedAt: new Date()
            }], {returning: true}).then(function (users) {
                return queryInterface.bulkInsert('hosting_tariffs', [{
                        name: 'high',
                        nvm_size: 15,
                        ssl: false,
                        max_sites: 9999,
                        memory_limit: 1536,
                        cost: 355,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }]
                );
            })
        })
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('hosting_tariffs', null, {});
    }
};
