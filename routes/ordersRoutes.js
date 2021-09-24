const express = require('express')
const { body } = require('express-validator');
const ordersController = require('../controllers/ordersController.js')
const isAuth = require('../modules/middleware/is-auth');

const router = express.Router()

router.get('/', isAuth, ordersController.getAll);
router.get('/:id', isAuth, ordersController.getOrder);


router.post('/new', isAuth, ordersController.makeNewOrder);


module.exports = router
