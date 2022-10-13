const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('views/products/index', [])
})

router.get('/:id', (req, res) => {
    res.render('views/products/show', {})
})

router.get('/new', (req, res) => {
    res.render('views/products/create')
})

router.get('/:id/edit', (req, res)=> {
    res.render('views/products/edit', {})
})

router.get(':id/delete', (req, res) => {
    res.redirect('/products')
})

module.exports = router



// const express = require('express')
// const router = express.Router()
// const productCtrl = require('../controllers/Products')

// router.get('/', productCtrl.index)
// router.get('/new', productCtrl.form)
// router.get('/:id', productCtrl.show)
// router.get('/:id/edit', productCtrl.form)
// router.post('/', productCtrl.create)
// router.post('/:id', productCtrl.update)
// router.delete('/:id', productCtrl.remove)
// router.post('/:id/delete', productCtrl.remove)

// module.exports = router