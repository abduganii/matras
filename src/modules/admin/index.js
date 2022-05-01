module.exports = (req,res) => {
    try {
        res.send("Page for admin")
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"Bad request"
        })
    }
}