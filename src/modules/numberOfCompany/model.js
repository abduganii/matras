const PG = require('../../lib/postgres')

class numbers extends PG{
    number() {
        return this.fetchAll(
            `
            select * from phoneNumber
            `
        )
    }   
}

module.exports = new numbers()