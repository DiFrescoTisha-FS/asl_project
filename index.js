const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// The following 2 lines are needed to upload the images
const fileUpload = require('express-fileupload')
app.use(fileUpload())
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))

const productRouter = require('./routes/Products')
const variantsRouter = require('./routes/Variants')
const imagesRouter = require('./routes/Images')
const storeRouter = require('./routes/Store')
const { index } = require('./controllers/Store')
app.use("/store", storeRouter)
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.use('/public', express.static('public'))

app.get('/', index)
app.use("/store", storeRouter)
app.use("/products", productRouter)
app.use("/variants", variantsRouter)
app.use("/images", imagesRouter)

app.listen(3000)