'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        user_id : 2,
        tariff_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 3,
        tariff_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 4,
        tariff_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
