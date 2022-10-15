const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/Products')
const variantsRouter = require('./routes/Variants')
const imagesRouter = require('./routes/Images')
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("views/home")
})

app.use("/products", productRouter)
app.use("/variants", variantsRouter)
app.use("/images", imagesRouter)

app.listen(3000)

// const express = require('express')
// const app = express()
// const twig = require('twig')
// const productRouter = require('./routers/Products')
// const variantRouter = require('/routers/Variants')
// const imageRouter = require('/routers/Images')
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.set('views', __dirname + '/templates')
// app.set('view engine', 'twig')

// app.get('/', (req, res) => {
//     res.render('views/home')
// })

// // app.get('/', (req, res) => {
// //     res.redirect('/products')
// // })

// app.use("/products", productRouter)
// app.use("/variants", variantRouter)
// app.use("/images", imageRouter)

// app.listen(3000)