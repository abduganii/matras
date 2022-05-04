const PG = require('../../lib/postgres')

class orders extends PG{
    order() {
        return this.fetchAll(
            `
            select * from orders where is_deleted = false
            `
        )
    }   
    newOrder(name,phoneNumber,quantity,productCategory) {
        return this.fetch(
             `
            insert into
            orders(
                order_name,
                order_phonenumb,
                order_quantity,
                product_id
            )
            Values
            ($1, $2, $3, $4)
                returning *
        `, [name,phoneNumber,quantity,productCategory]
        )
    }
}

module.exports = new orders()