const PG = require('../../lib/postgres')

class products extends PG{
    product(cotegoryId) {
        return this.fetchAll(
            `
            select * from products where is_deleted = false and cotegory_id= $1
            `,[cotegoryId]
        )
    }   
    newProduct(productName,productImg,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId) {
        return this.fetchAll(
            `
            insert into
    products(
        product_name,
        product_img,
        product_price,
        product_weight,
        product_sice,
        product_garian,
        product_suitable,
        product_price_aksiya,
        product_text,
        cotegory_id
    )
    Values
    ($1, $2, $3, $4,$5,$6,$7,$8)
    `
            , [productName, productImg, productPrice, productWight, productSize, productWarranty, productSuitable, productPriceAksiya, productText, cotegoryId]
        )
    }
    updateProduct(productName,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId,id) {
        return this.fetch(
        `
            UPDATE 
                products 
            SET 
                product_name = $1,
                product_img= $2,
                product_price= $3,
                product_weight= $4,
                product_sice= $5,
                product_garian= $6,
                product_suitable= $7,
                product_price_aksiya= $8,
                product_text= $9,
                cotegory_id = $10
            WHERE 
                product_id = $11
            returning *
        `,[productName,imageproduct,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId,id])
    }
    deleteProducts(id) {
        return this.fetch(
            `
                UPDATE 
                    products 
                SET 
                is_deleted = true 
                WHERE 
                product_id = $1
                returning *
            `,[id])
    }
}

module.exports = new products()