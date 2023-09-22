const mysql = require('mysql')

const productModel  =mysql.createConnection({
    host:'localhost',
    database: 'product-management',
    user:'root',
    password:''
})

module.exports = productModel