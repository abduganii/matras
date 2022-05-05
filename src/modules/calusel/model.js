const PG = require('../../lib/postgres')

class carusels extends PG { 
    carusel() {
        return this.fetchAll(
            `
                select * from carusels where is_deleted = false
            `
        )
    }
}

module.exports = new carusels