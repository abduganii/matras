const PG = require('../../lib/postgres')

class technologies extends PG {
    technologie() {
        return this.fetchAll(`
            select * from technologies where is_deleted = false
        `)
    }
    newTechnologie(technologieName,technologieTitle,technologieVideo) {
        return this.fetch(
             `
             insert into
             technologies(
                technologie_name,
                technologie_title,
                technologie_video
             )
            Values
             (
                 $1,$2,$3
             )
                returning *
        `, [technologieName,technologieTitle,technologieVideo]
        )
    }
    updateTechnologie(id,technologieName,technologieTitle,technologieVideo) {
        return this.fetch(
        `
        UPDATE
            technologies
        SET
            technologie_name = $2,
            technologie_title = $3,
            technologie_video = $4
        WHERE
        technologie_id = $1
            returning *
        `,[id,technologieName,technologieTitle,technologieVideo])
    }
    deleteTechnologie(id) {
        return this.fetch(
            `
                UPDATE 
                    technologies 
                SET 
                    is_deleted = true 
                WHERE 
                    technologie_id = $1
                returning *
            `,[id])
    }
}

module.exports =new technologies