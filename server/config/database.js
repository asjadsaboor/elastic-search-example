module.exports = {
    database: {
        connectionString: 'postgres://postgres:postgres@postgres:5432',
        dbName: 'postgres',
        options: {
            dialect: 'postgres',
            pool: {
                max: 5,
                idle: 30000,
                acquire: 60000,
            }
        }
    },
    elasticSearch: {
        address: 'elastic-search:9200',
        log: 'info'
    }
};