const db = require('./db-config.js')
const mode = process.env.NODE_ENV || 'local'
//const mode = process.env.NODE_ENV || 'prod'

const config = {
    local: {
        db: db[mode],
        jwt_secret: 'somesupersecretsecret'
    }
}

module.exports = config[mode]
