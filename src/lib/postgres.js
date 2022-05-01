const { Pool } = require('pg')
const {connection}= require('../config')
const poolConnection = new Pool({
    connectionString: connection.connectionElString
})

class PG{
    constructor() {
        this.pool = poolConnection
    }

    async fetchAll(SQL, ...params) {
        const client = await this.pool.connect()
        try {
            const { rows } = await client.query(SQL, ...params)
            return rows
        } finally {
            client.release()
        }
    }
    async fetch(SQL, ...params) {
        const client = await this.pool.connect()
        try {
            const { rows:[row] } = await client.query(SQL, ...params)
            return row
        } finally {
            client.release()
        }
    }
}

module.exports = PG