const model = require('./model')

module.exports = {
    Get: async (req, res) => {
        try {
            res.send(await model.cotegory())
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Post: async (req, res) => {
        try {
            const { cotegory } = req.body
            res.send(await model.newCategorie(cotegory))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Put: async(req, res) =>{
        try {
            const {cotegory,id} = req.body
            res.send(await model.updateCategorie(cotegory,id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            }) 
        }
    },
    Delete: async(req, res) =>{
        try {
            const {id} = req.body
            res.send(await model.deleteCategorie(id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            }) 
        }
    }
}