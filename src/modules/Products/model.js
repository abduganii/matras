const PG = require('../../lib/postgres')

class products extends PG{
    product() {
        return this.fetchAll(
            `
            select * from products where is_deleted = false
            `
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
    ),[productName,productImg,productPrice,productWight,productSize,productWarranty,productSuitable,productPriceAksiya,productText,cotegoryId]
    }
}

module.exports = new products()