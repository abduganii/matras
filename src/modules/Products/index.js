const model = require('./model')

module.exports = {
    Get: async (req, res) => {
        try {
            res.send(await model.product())
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Post: async (req, res) => {
        try {
            const imageproduct = []
            const fileImg = req.files
			fileImg.map((e) => {
                imageproduct.push(e.path)
            });
            const {productName,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId} = req.body
            res.send(await model.newProduct(productName,imageproduct,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId) )
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    }
}