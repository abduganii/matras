const PG = require('../../lib/postgres')

class pluses extends PG{
    plus() {
        return this.fetchAll(
            `
            select * from ourPlus
            `
        )
    }   
}

module.exports = new pluses()