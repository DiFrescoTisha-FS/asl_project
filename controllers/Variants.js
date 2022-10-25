const { Variants, Product } = require('../models')

const index = async (req, res) => {
	const variant = await Variants.findAll()
	res.render('views/variants/index', { variant })
	// res.json(variant)
}

const form = async (req, res) => {
	const product = await Product.findAll()
	if (req.params.id) {
		const variants = await Variants.findByPk(req.params.id)
		res.render('views/variants/edit', { variants, product })
	} else {
		res.render('views/variants/create', { product })
	}
}

const show = async (req, res) => {
	const variants = await Variants.findByPk(req.params.id)
	const products = await variants.getProducts()
	res.render('views/variants/show', { variants, products })
}

const create = async (req, res) => {
	const variant = await Variants.create(req.body)
	res.redirect('/variants/' + variant.id)
}

const update = async (req, res) => {
	const variant = await Variants.update(req.body, {
		where: { id: req.params.id }
	})
	res.redirect('/variants/' + req.params.id)
}

const remove = async (req, res) => {
	const variants = await Variants.destroy({ where: { id: req.params.id }})
	res.redirect('/variants')
}

module.exports = { index, form, show, create, update, remove }