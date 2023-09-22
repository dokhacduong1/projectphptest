const productModel = require("../../models/product.model")
module.exports.index = function (req, res) {
    console.log(productModel)
    productModel.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.log(err);
            return;
        }

        // Lấy kết quả
     
    })
    res.render("client/pages/home", {
        title: "Trang Chủ"
    })
}