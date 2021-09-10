const passport = require('../modules/passport.js')
const { checkSchema, validationResult } = require('express-validator')
const config = require('../config/config.js')
const jwt = require('jsonwebtoken')
const error = require('../modules/services.js').makeError








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
        res.status(200).json({ user: userObj });
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
        res.status(200).json({ message: 'User updated.' });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
};
