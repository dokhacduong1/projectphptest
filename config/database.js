//import mongoose vào
const mysql = require('mysql')
module.exports.connect =async ()=>{
    let productModel = null;
    try {
        //Connect Đến Database ở SQL
        productModel = mysql.createConnection({
            host:'localhost',
            database: 'product-management',
            user:'root',
            password:''
        })
        console.log("Conect Database Ok")
    } catch (error) {
        console.log("Connect Error!",error);
    }
    return productModel
}
