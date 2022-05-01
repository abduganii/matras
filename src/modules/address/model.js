const PG = require('../../lib/postgres')

class address extends PG{
    addres() {
        return this.fetchAll(
            `
            select * from address where is_deleted = false
            `
        )
    }   
    newAddres(addressName,addressText,addressLoc,addressImage) {
        return this.fetch(
             `
            insert into
            addres(
                 address_name,
                 address_text,
                 address_loc,
                 address_image
            )
            Values
            ($1, $2, $3, $4)
                returning *
        `, [addressName,addressText,addressLoc,addressImage]
        )
    }
}

module.exports = new address()