const model = require('./model')

module.exports = {
    Get: async (req, res) => {
        try {
            const {cotegoryid} = req.headers
            res.send(await model.product(cotegoryid))
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
                console.log(e)
            });
            console.log(imageproduct)
            const {productName,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId} = req.body
            res.send(await model.newProduct(productName,imageproduct,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId) )
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    },
    Put: async(req, res) =>{
        try {
            const imageproduct = []
            const fileImg = req.files
			fileImg.map((e) => {
                imageproduct.push(e.path)
                console.log(e)
            });
            const {productName,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId,id} = req.body
            res.send(await model.updateProduct(productName,imageproduct,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId,id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            }) 
        }
    },
    Delete: async(req, res) =>{
        try {
            const {id} = req.body
            res.send(await model.deleteProducts(id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            }) 
        }
    }

}