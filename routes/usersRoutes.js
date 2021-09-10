const express = require('express')
const { body } = require('express-validator');
const usersController = require('../controllers/usersController.js')
const isAuth = require('../middleware/is-auth');

const router = express.Router()

//router.get('/user', isAuth, authController.getUser); //me

router.patch(
  '/user/name',
  isAuth,
  [
    body('name')
      .trim()
      .not()
      .isEmpty()
  ],
    usersController.updateUserName
);

module.exports = router
