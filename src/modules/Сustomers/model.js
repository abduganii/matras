const PG = require('../../lib/postgres')

class customers extends PG{
    customer() {
        return this.fetchAll(
            `
                select * from customer where is_deleted = false
            `
        )
    }
    newCustomers(phoneNumber) {
        return this.fetch(
             `
                insert into
                    customer(customer_number)
                Values($1)
                returning *
        `, [phoneNumber]
        )
    }
    changeIscal(tryfalse,id) {
        return this.fetch(
            `
            UPDATE 
                customer 
            SET 
                is_call = $1 
            WHERE 
                customer_id = $2
            returning *
        `,[tryfalse,id]) 
    }
    deletecustomers(id) {
        return this.fetch(
            `
                UPDATE 
                    customer 
                SET
                    is_deleted = true
                WHERE 
                    customer_id = $1
                returning *
            `,[id])
    }
}

module.exports = new customers()