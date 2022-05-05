const PG = require('../../lib/postgres')

class orders extends PG{
    order() {
        return this.fetchAll(
            `
            select
            *
            from
            orders o
            INNER join products p 
            ON o.product_id = p.product_id
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
    changeIscal(tryfalse,id) {
        return this.fetch(
            `
            UPDATE 
                orders 
            SET 
                is_call = $1
            WHERE 
                order_id = $2
            returning *
        `,[tryfalse,id]) 
    }
}

module.exports = new orders()