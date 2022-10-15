const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/Products')

router.get('/', productCtrl.index )
router.get('/new', productCtrl.form )
router.get('/:id', productCtrl.show )
router.get('/:id/edit', productCtrl.form )
router.post('/', productCtrl.create )
router.post('/:id', productCtrl.update )
router.delete('/:id', productCtrl.remove )
router.get('/:id/delete', productCtrl.remove )

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

// module.exports = routerconst express = require('express')
// const router = express.Router()
// const variantCtrl = require('../controllers/Variants')

// router.get('/', variantCtrl.index )
// router.get('/new', variantCtrl.form )
// router.get('/:id', variantCtrl.show )
// router.get('/:id/edit', variantCtrl.form )
// router.post('/', variantCtrl.create )
// router.post('/:id', variantCtrl.update )
// router.delete('/:id', variantCtrl.remove )
// router.get('/:id/delete', variantCtrl.remove )

// module.exports = router