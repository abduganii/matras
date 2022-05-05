const PG = require('../../lib/postgres')

class carusels extends PG { 
    carusel() {
        return this.fetchAll(
            `
                select * from carusels
            `
        )
    }
}

module.exports = new carusels()