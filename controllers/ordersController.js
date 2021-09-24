const {Order, User, HostingTariff} = require('../models/index');

exports.getAll = (req, res, next) => {
    Order.findAll()
        .then(orders => {
            res.status(200).json(orders);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.getOrder = (req, res, next) => {
    Order.findByPk(req.params.userId)
        .then(order => {
            if (!order) {
                const error = new Error('Order not found.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json(order);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};


exports.makeNewOrder = (req, res, next) => {
    HostingTariff.findByPk(req.body.tariff_id)
        .then(tariff => {
            return Order.create({
                'user_id': req.authUserId,
                'tariff_id': tariff.id,
            })
        })
        .then((order) => {
            User.findByPk(req.authUserId)
                .then(user => {
                    user.order_id = order.id
                    user.save()
                })
            return order;
        })
        .then(order => {
            res.status(201).json(order)
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

