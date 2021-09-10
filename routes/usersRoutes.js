const express = require('express')
const customersController = require('../controllers/usersController.js')
const isAuthenticate = require('../modules/middleware/isAuthenticate.js')

const usersRouter = express.Router()

const { loginValidation, login, logout, checkAuth } = customersController

usersRouter.post('/login', loginValidation, login)
usersRouter.use('/authAdmin', isAuthenticate, checkAuth)
usersRouter.get('/logout', logout)

module.exports = usersRouter
