'use strict';
const {User} = require('../../models/index');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return User.findByPk(2)
            .then(User => {
                User.order_id = 1;
                return User.save();
            })
            .then(() => {
                User.findByPk(3)
                    .then(User => {
                        User.order_id = 2;
                        return User.save();
                    })
            })
            .then(() => {
            User.findByPk(4)
                .then(User => {
                    User.order_id = 3;
                    return User.save();
                })
        });
    },

    down: async (queryInterface, Sequelize) => {
        return User.findByPk(2)
            .then(User => {
                User.order_id = null;
                return User.save();
            })
            .then(() => {
                User.findByPk(3)
                    .then(User => {
                        User.order_id = null;
                        return User.save();
                    })
            })
            .then(() => {
                User.findByPk(4)
                    .then(User => {
                        User.order_id = null;
                        return User.save();
                    })
            });
    }
};
