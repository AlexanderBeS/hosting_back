const express = require('express')
const { body } = require('express-validator');
const usersController = require('../controllers/usersController.js')
const isAuth = require('../modules/middleware/is-auth');

const router = express.Router()

// router.get('/me', isAuth, usersController.getUser);
// router.get('/:id/order', isAuth, usersController.getOrder);
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
