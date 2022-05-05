const model = require('./model')

module.exports = {
    Get: async (req, res) => {
        try {
            res.send(await model.order())
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Put: async (req, res) => {
        try {
            let tryfalse2 
            const { tryfalse, id } = req.body
            if (tryfalse == false) {
                tryfalse2 = true
            }
            if (tryfalse == true) {
                tryfalse2 = false
            }
            console.log(tryfalse,id)
            res.send(await model.changeIscal(tryfalse2,id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Post: async (req, res) => {
        try {
            const { name, phoneNumber, quantity, productCategory } = req.body
            console.log(name, phoneNumber, quantity, productCategory)
            res.send(await model.newOrder(name,phoneNumber,quantity,productCategory))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    }
}