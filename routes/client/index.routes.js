const homeRoutes = require("./home.routes")

module.exports=(app)=>{
    app.use('/',homeRoutes)
}