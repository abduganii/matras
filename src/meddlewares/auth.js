const { verifyuser } = require("../lib/jwt")
const modelAdmin = require('../modules/login/model')

module.exports =  async (req, res, next) => {
    try {
        const admin = await modelAdmin.admin()
        const { token } = req.headers
        const { adminId, name } = verifyuser(token)
        const fondAdmin = admin.find(e =>e.admin_id === adminId && e.admin_name === name)
        
        if (!fondAdmin) {
            res.redirect("/login")
            return
        }
        next()
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"NOT AUTH TOKEN"
        })
    }
}