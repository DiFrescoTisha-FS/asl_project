const express = require('express')
const app = express()

// // GET /products/page-2/sort-price/order-desc HTTP/1.1
app.get('/products/:pageId-:productSort-:productOrder', (request, response) => {
    response.send(
        'GET Products: ' + request.params.pageId +
        ', ' + request.params.productSort +
        ', ' + request.params.productOrder,
        )
})

// GET / HTTP/1.1
// app.get('/', (request, response) => {
//     response.send('Home Page! GET...')
// })

// POST / HTTP/1.1
// app.post('/', (request, response) => {
//     response.send('Home Page POST...')
// })


// POST /products/8719-small-red HTTP/1.1
app.post('/products/:productId-:productName', (request, response) => {
    response.send(
        'GET Products: ' + request.params.productName + 
        ', ' + request.params.productId, 
    )
})

// // POST /products/8719-small-red HTTP/1.1
app.get('/products/:productId-:productName', (request, response) => {
    response.send(
        'GET Products: ' + request.params.productId + 
        ', ' + request.params.productName, 
    )
})


// POST /products/8719 HTTP/1.1
app.post('/procucts/:productId', (request, response) => {
    response.send('GET Product: ' + request.params.productId)
})

// GET /products/8719 HTTP/1.1
app.get('/products/:productId', (request, response) => {
    response.send(
        'GET Product: ' + request.params.productId,
    )
})

// GET /products/nike-large-white-shoe HTTP/1.1
// app.get('/products/:productId-:productName', (request, response) => {
//     response.send(
//         'Product Page! Product name: ' + request.params.productName +
//         'Product id: ' + request.params.productId
//         )
// })

// GET /products/683-nike-large-white-shoe HTTP/1.1
// app.get('/products/:productName', (request, response) => {
//     response.send('Product Page! Product name: ' + request.params.productName)
// })

// GET /products HTTP/1.1
// app.get('/products', (request, response) => {
//     response.send('Products Page: ' + request.params.products)
// })



















app.listen(3000)