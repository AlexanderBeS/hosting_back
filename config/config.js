const db = require('./db-config.js')
const mode = process.env.NODE_ENV || 'local'

const config = {
    local: {
        db: db[mode],
        jwt_secret: 'somesupersecretsecret'
    },
    prod: {
        db: db[mode],
        jwt_secret: 'somesupersecretsecret'
    }
}

module.exports = config[mode]
