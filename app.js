const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
const passport = require('./modules/passport.js')
const handleError = require('./modules/middleware/handleError.js')
const checkConnectionDB = require('./modules/middleware/checkDbConnection.js')
const path = require('path')
const cors = require('cors')
const pathToStatic = path.join(__dirname, '../../dist')

const usersRouter = require('./routes/usersRoutes.js')
const authRoutes = require('./routes/authRoutes');
const tariffRoutes = require('./routes/tariffRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())
app.use(express.static(pathToStatic))
app.use(passport.initialize())
app.use(checkConnectionDB)

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRouter);
app.use('/api/tariffs', tariffRoutes);
app.use('/api/orders', orderRoutes);

app.get('*', (req, res) => {
  if (fs.existsSync(pathToStatic, 'index.html')) {
    return res.sendFile(path.resolve(pathToStatic, 'index.html'))
  }
  res.status(404).send('Page not found!')
})

app.use(handleError)

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`))
