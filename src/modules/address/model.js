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
            address(
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
    UPDATEAddres(imageproduct,addressName, addressText, addressLocation ,id){
        return this.fetch(
        `
            UPDATE 
                address 
            SET 
                address_name = $2,
                address_image= $1,
                address_text= $3,
                address_loc= $4,
            WHERE 
            address_id = $5
            returning *
        `,[imageproduct,addressName, addressText, addressLocation ,id])
    }
    deleteAddress(id) {
        return this.fetch(
            `
                UPDATE 
                    address 
                SET 
                is_deleted = true 
                WHERE 
                address_id = $1
                returning *
            `,[id])
    }
}

module.exports = new address()