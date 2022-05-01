const PG = require('../../lib/postgres')

class cotegoryis extends PG{
    cotegory() {
        return this.fetchAll(
            `
                select * from cotegory where is_deleted = false
            `
        )
    }
    newCategorie(cotegorys) {
        return this.fetch(
             `
                insert into
                    cotegory(cotegory)
                Values($1)
                returning *
        `, [cotegorys]
        )
    }
    updateCategorie(cotegorys,id) {
        return this.fetch(
        `
            UPDATE 
                cotegory 
            SET 
                cotegory = $1 
            WHERE 
                cotegory_id = $2
            returning *
        `,[cotegorys,id])
    }
    deleteCategorie(id) {
        return this.fetch(
            `
                UPDATE 
                    cotegory 
                SET 
                is_deleted = true 
                WHERE 
                    cotegory_id = $1
                returning *
            `,[id])
    }
}

module.exports = new cotegoryis()