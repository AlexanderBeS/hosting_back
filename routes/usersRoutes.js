const express = require('express')
const { body } = require('express-validator');
const usersController = require('../controllers/usersController.js')
const isAuth = require('../modules/middleware/is-auth');

const router = express.Router()

router.get('/:userId', isAuth, usersController.getUser);
router.get('/:userId/orders', isAuth, usersController.getOrdersByUserId);
router.get('/:userId/orders/active', isAuth, usersController.getActiveOrder);

//change my name
router.patch(
  '/',
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
