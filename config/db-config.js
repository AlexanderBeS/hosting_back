module.exports = {
    deploy: {
        username: 'root',
        password: 'rootroot',
        database: 'hosting',
        host: 'aa1ghlps48ehecq.ch8gvzg2q3r5.us-east-2.rds.amazonaws.com',
        dialect: 'mysql',
        seederStorage: 'sequelize',
        seederStorageTableName: 'sequelizemeta',
        operatorsAliases: false,
        port: 3306,
    },
    local: {
        username: 'root',
        password: 'rootroot',
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
