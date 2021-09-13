const hostingTariff = require('../models/hostingTariffs');

exports.getTariff = (req, res, next) => {
    hostingTariff.findByPk(req.params.id)
        .then(tariff => {
            if (!tariff) {
                const error = new Error('Tariff not found.');
                error.statusCode = 404;
                throw error;
            }

            res.status(200).json(tariff);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getAll = (req, res, next) => {
    hostingTariff.findAll()
        .then(tariffs => {
            res.status(200).json(tariffs);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
    })
};
