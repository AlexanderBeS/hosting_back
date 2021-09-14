const express = require('express')
const { body } = require('express-validator');
const ordersController = require('../controllers/orderController.js')
const isAuth = require('../modules/middleware/is-auth');

const router = express.Router()

// router.get('/me', isAuth, usersController.getUser);
router.get('/:id/order', isAuth, ordersController.getOrder);
//
// //change my name
// router.patch(
//   '/',
//   isAuth,
//   [
//     body('name')
//       .trim()
//       .not()
//       .isEmpty()
//   ],
//     usersController.updateUserName
// );

module.exports = router
