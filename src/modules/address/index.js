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
    },
    Put: async (req, res) => {
        try {
            const imageproduct = []
            const fileImg = req.files
			fileImg.map((e) => {
                imageproduct.push(e.path)
                console.log(e)
            });
            
            const {addressName, addressText, addressLocation ,id} = req.body
            res.send(await model.UPDATEAddres(imageproduct,addressName, addressText, addressLocation ,id))
        } catch (error) {
            res.status(400).send({
                status: 400,
                error: error.message
            }) 
        }
    },
    delete: async (req, res) => {
        try {
          const {id} = req.body
          res.send(await model.deleteAddress(id))
      } catch (error) {
            res.status(400).send({
                status: 400,
                error: error.message
            }) 
      }  
    }
}