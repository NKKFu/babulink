const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'babudb',
    port: 5432
})

client.connect()

module.exports = client;