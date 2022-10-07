const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/Products')
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home", { name: 'World', 'users': [
        { name: 'Tisha Di Fresco', email: 'tbdifresco@student.fullsail.edu' },
        { name: 'Dana Lou', email: 'dlou@student.fullsail.edu' },
        { name: 'Jesse Pinkman', email: 'jpinkman@student.fullsail.edu' },
    ] })
})

app.use("/products", productRouter)

app.listen(3000)



// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// const productRouter = require('./routes/Products')
// app.set('views', __dirname + '/templates')
// app.set('view engine', 'twig')

// app.get('/', (req, res) => {
//     res.render("home", { name: 'World', 'users': [
//         { name: 'Tisha Di Fresco', email: 'tbdifresco@student.fullsail.edu' },
//         { name: 'Dana Lou', email: 'dlou@student.fullsail.edu' },
//         { name: 'Jesse Pinkman', email: 'jpinkman@student.fullsail.edu' },
//     ] })
// })

// app.use("/products", productRouter)

// app.listen(3000)