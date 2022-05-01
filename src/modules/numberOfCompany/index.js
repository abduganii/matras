const model = require('./model')

module.exports = async (req,res) => {
    try {
        res.send(await model.number())
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"Bad request"
        })
    }
}