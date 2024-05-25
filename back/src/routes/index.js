const UserRouter = require('../routes/UserRouter')
const ProductRouter = require('../routes/ProductRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
}

module.exports = routes