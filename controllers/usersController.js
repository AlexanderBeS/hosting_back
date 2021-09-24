const {User, Order} = require('../models/index');

exports.getUser = (req, res, next) => {
    User.findByPk(req.params.userId)
        .then(user => {
            if (!user) {
                const error = new Error('User not found.');
                error.statusCode = 404;
                throw error;
            }
            userObj = {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "createdAt": user.createdAt,
            };
            res.status(200).json(userObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateUserName = (req, res, next) => {
    const newName = req.body.name;
    User.findByPk(req.params.userId)
        .then(user => {
            if (!user) {
                const error = new Error('User not found.');
                error.statusCode = 404;
                throw error;
            }
            user.name = newName;
            return user.save();
        })
        .then(result => {
            res.status(200).json({message: 'User updated.'});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getActiveOrder = (req, res, next) => {
    User.findByPk(req.params.userId)
        .then(user => {
            user.getActiveOrder()
                .then(order => {
                    res.status(200).json(order);
                })
                .catch(err => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.getOrdersByUserId = (req, res, next) => {
    User.findByPk(req.params.userId, {
        include: [
            {model: Order}
        ]
    })
        .then(user => {
            res.status(200).json(user.orders);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}
