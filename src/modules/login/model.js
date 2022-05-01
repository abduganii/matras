const PG = require('../../lib/postgres')

class admins extends PG{
    admin() {
        return this.fetchAll(
            `
            select * from admins
            `
        )
    }   
}

module.exports = new admins()