const model = require('./model')

module.exports = {
    Get: async (req,res) => {
        try {
            res.send(await model.carusel())
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    }
}