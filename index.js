//Require Thư viện đã cài
const express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var flash = require('express-flash')
var cookieParser = require('cookie-parser')
var session = require('express-session')


//Require các thành phần vừa viết
const routeClient = require("./routes/client/index.routes")
const routeAdmin = require("./routes/admin/index.routes")
const systemConfig = require("./config/systems")
const database = require("./config/database")



//Tạo một đối tượng app
const app = express()


//Cấu hình phương thức gửi đi của form
app.use(methodOverride('_method'))
//Cấu hình thư mục cho public  để người dùng có thể truy cập được trong mục public
app.use(express.static('public'));
//Cấu hình để nhận data body khi request
app.use(bodyParser.urlencoded({ extended: false }))
//Cấu hình để hiển thị thông báo (Flash)
app.use(cookieParser('FJFDSIOSDFIPDSF'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());


//Tạo cổng cho có là 3000
const port = 3000


app.locals.prefixAdmin = systemConfig.prefixAdmin;

//Truyền app vào routes chính của Client và Admin trước ta đặt là index.routes
routeClient(app)
routeAdmin(app)


//Cấu hình cho express hiểu đang sử dụng pug
//Và cấu hình thư mục cho templates ở đây là thư mục  Views
app.set("views", "./Views");
app.set("view engine", "pug");





//Import cấu hình file .env
require("dotenv").config();
database.connect()



//Cho expres lắng nghe cổng 3000 và chạy cổng
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


