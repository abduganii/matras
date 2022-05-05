const model = require('./model')

module.exports = {
    Get:async(req, res) => {
        try {
            res.send(await model.addres())
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Post: async (req,res) => {
        try {
            const imageArr = []
            const fileImg =req.files
			fileImg.map((e) => {
                imageArr.push(e.path)
            });
            
            const { addressName, addressText, addressLocation } = req.body
            console.log(addressName,addressText)
            res.send(await model.newAddres(addressName,addressText,addressLocation,imageArr))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error: error.message
            })
        }
    }
}