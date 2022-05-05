const model = require('./model')

module.exports = {
    Get: async(_,res) => {
        try {
            res.send(await model.customer())
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Post: async (req, res) => {
        try {
            const { phoneNumber } = req.body
            res.send(await model.newCustomers(phoneNumber))
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
            const customerArr = await model.customer()
            const Sortcustomer = customerArr.find(e => e.customer_id == id)
            const tryFalse = !Sortcustomer.customer_iscalled
            res.send(await model.changeIscal(tryFalse,id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Delete: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await model.deletecustomers(id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    }
}