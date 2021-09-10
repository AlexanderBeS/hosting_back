module.exports = {
    local: {
        username: 'root',
        password: 'root',
        database: 'hosting',
        host: '127.0.0.1',
        dialect: 'mysql',
        seederStorage: 'sequelize',
        seederStorageTableName: 'sequelizemeta',
        operatorsAliases: false,
        port: 33061,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
}
