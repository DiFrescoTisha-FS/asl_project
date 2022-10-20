const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/Products')

// Loading in our new middleware
// const { uploadImage } = require('../middlewares')

router.get('/', productCtrl.index)
router.post('/', productCtrl.create)
router.get('/new', productCtrl.form)
router.get('/:id', productCtrl.show)
router.get('/:id/edit', productCtrl.form)

// Added our uploadImage middleware to our create route
// router.post('/', imageCtrl.create, uploadImage)
// Added our uploadImage middleware to our update route
// router.post('/:id', imageCtrl.update, uploadImage)

router.post('/:id', productCtrl.update)

router.delete('/:id', productCtrl.remove)
router.get('/:id/delete', productCtrl.remove)

module.exports = router