const dashboardRoutes = require("./dashboard.routes")

module.exports=(app)=>{
    app.use('/admin/dashboard',dashboardRoutes)
}