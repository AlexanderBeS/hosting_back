const { User, Order } = require('../models/index');

exports.getUser = (req, res, next) => {
    User.findByPk(req.userId)
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
    User.findByPk(req.userId)
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

exports.getOrdersByUserId = (req, res, next) => {
    //
    // const tasks = User.findByPk(req.userId,{ include: Order });
    // console.log(JSON.stringify(tasks, null, 2));

    //    User.findByPk(req.userId, {
    //         include: [
    //             {model: Order, as: 'Orders', where: {user_id: User.id}}
    //         ]
    //     })

    User.findByPk(req.userId, {
        include: [
            {model: Order}
        ]
    })
        .then(user => {
            console.log(user);
            res.status(200).json(user);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}
