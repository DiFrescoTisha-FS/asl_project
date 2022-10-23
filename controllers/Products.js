// const { Product } = require('../models')

// const index = async (req, res) => {
// 	const products = await Product.findAll()
// 	res.render('views/products/index', { products })
// 	// res.json(products)
// }

// const form = async (req, res) => {
// 	if (req.params.id) {
// 		const product = await Product.findByPk(req.params.id)
// 		res.render('views/products/edit', { product })
// 	} else {
// 		res.render('views/products/create')
// 	}
// }

// const show = async (req, res) => {
// 	const product = await Product.findByPk(req.params.id)
// 	res.render('views/products/show', { product })
// }

// const create = async (req, res) => {
// 	const product = await Product.create(req.body)
// 	res.redirect('/products/' + product.id)
// }

// const update = async (req, res) => {
// 	const product = await Product.update(req.body, {
// 		where: { id: req.params.id }
// 	})
// 	res.redirect('/products/' + req.params.id)
// }

// const remove = async (req, res) => {
// 	const products = await Product.destroy({ where: { id: req.params.id }})
// 	res.redirect('/products')
// }

// module.exports = { index, form, show, create, update, remove }

const { Product } = require('../models')

const index = async (req, res) => {
	const products = await Product.findAll()
	res.render('views/products/index', { products })
	// res.json(products)
}

const form = async (req, res) => {
	if (req.params.id) {
		const product = await Product.findByPk(req.params.id)
		res.render('views/products/edit', { product })
	} else {
		res.render('views/products/create')
	}
}

const show = async (req, res) => {
	const product = await Product.findByPk(req.params.id)
	res.render('views/products/show', { product })
}

const create = async (req, res) => {
	const product = await Product.create(req.body)
	res.redirect('/products/' + product.id)
}

const update = async (req, res) => {
	const product = await Product.update(req.body, {
		where: { id: req.params.id }
	})
	res.redirect('/products/' + req.params.id)
}

const remove = async (req, res) => {
	const products = await Product.destroy({ where: { id: req.params.id }})
	res.redirect('/products')
}

module.exports = { index, form, show, create, update, remove }

// const { Products } = require('../models')

// const index = async (req, res) => {
//     const products= await Products.findAll()
//     res.render('views/products/index', { products })
//     // res.render('views/index', products)
// }

// const show = async (req, res) => {
//     const product = await Products.findByPk(req.params.id)
//     res.render('views/products/show', { product })
// }

// const create = async (req, res) => {
//     const product = await Products.create(req.body)
//     res.redirect('/products')
// }

// const update = async (req, res) => {
//     const product = await Products.update(req.body, {
//         where: { id: req.params.id }
//     })
//     res.redirect(`/products/${req.params.id}`)
// }

// const remove = async (req, res) => {
//     const deleted = await Products.destroy({
//         where: { id: req.params.id }
//     })
//     res.redirect('/products')
// }

// const form = async (req, res) => {
//     if (req.params.id) {
//         const product = await Products.findByPk(req.params.id)
//         res.render('views/products/edit', { product })
//     } else {
//         res.render('views/products/create', {})
//     }
// }

// module.exports = { index, show, create, remove, form, update }