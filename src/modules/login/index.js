const model = require('./model')
const {signuser} = require('../../lib/jwt')

module.exports = async (req, res) => {
    try {
        const admin = await model.admin()
        const { name, password } = req.body
        const sortAdmin = await admin.find(e => e.admin_name===name && e.admin_password === password )
    
        if (!sortAdmin) {
            res.send("name or password is not true")
            return
        }
        
        const token = signuser({ adminId: sortAdmin.admin_id, name: sortAdmin.admin_name })
        res.status(200).send({
            stutus:200,
            token:token
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"Bad request"
        })
    }
}