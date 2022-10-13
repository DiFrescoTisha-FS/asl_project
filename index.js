const express = require('express')
const app = express()
const twig = require('twig')
const productRouter = require('./routers/Products')
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.redirect('/products')
})

app.use("/products", productRouter)

app.listen(3000)