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
    GetByCotegory: async (req, res) => {
        try {
            const {cotegoryId} =req.headers
            res.send(await model.productbycotygory(cotegoryId))
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
    PutIscall: async (req, res) => {
        try{
            const { id } = req.body
            const productArr = await model.product()
            const Sortproduct = productArr.find(e => e.product_id == id)
            const tryFalse = !Sortproduct.is_active
            res.send(await model.changeIscal(tryFalse,id))
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