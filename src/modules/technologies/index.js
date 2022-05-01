const model = require('./model')

module.exports = {
    Get: async(req,res) => {
        try {
            res.send(await model.technologie())
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Post: async (req, res) => {
        try {
            const { technologie_name, technologie_title, technologie_video } = req.body
             res.send(await model.newTechnologie( technologie_name, technologie_title, technologie_video ))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Put: async (req, res) => {
        try {
            const { technologie_id, technologie_name, technologie_title, technologie_video } = req.body
            res.send(await model.updateTechnologie( technologie_id,technologie_name, technologie_title, technologie_video ))    
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            }) 
        }
    },
    Delete: async (req, res) => {
        try {
            const { technologie_id } = req.body
            res.send(await model.deleteTechnologie(technologie_id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            }) 
        }
    }
}