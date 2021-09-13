const express = require('express')
const { body } = require('express-validator');
const tariffsController = require('../controllers/tariffsController.js')
const isAuth = require('../modules/middleware/is-auth');

const router = express.Router()

router.get('/', tariffsController.getAll);
router.get('/:id', tariffsController.getTariff);

module.exports = router
