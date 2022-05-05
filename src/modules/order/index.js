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
            const { id } = req.body
            const OrderArr = await model.order()
            const SortOrder = OrderArr.find(e => e.order_id == id)
            const tryFalse= !SortOrder.is_call
            res.send(await model.changeIscal(tryFalse,id))
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
            res.send(await model.newOrder(name,phoneNumber,quantity,productCategory))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    }
}