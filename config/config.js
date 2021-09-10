const db = require('./db-config.js')
const mode = process.env.NODE_ENV || 'local'

const config = {
    local: {
        db: db[mode],
        define: {
            timestamps: true
        }
    }
}

module.exports = config[mode]
