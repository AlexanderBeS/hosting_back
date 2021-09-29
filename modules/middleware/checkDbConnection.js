const db = require('../../db/db-connection.js')

module.exports = function (req, res, next) {
  return db
    .authenticate()
    .then(() => {
      next()
    })
    .catch(err => {
      if (err) {
        return res.status(500).json(process.env.NODE_ENV + 'Miss connection to database.')
      }
    })
}
