const { Product, Variants, Images } = require('../models')

const index = async (req, res) => {
	const products = await Product.findAll({
		include: [
			{ model: Variants, include: [Images] }
		]
	})
	res.render('views/store/index', { products })
}

const show = async (req, res) => {
	const product = await Product.findOne({ 
		where: { slug: req.params.slug },
		include: [
			{ model: Variants, include: [Images] }
		]
	})

	// Variant defaults to first variant in product
	let variant = product.Variant[0]

	// If ?v= is set in the URL then set the variant
	if (req.query.v) {
		variant = product.Variant.find(v => v.slug === req.query.v)
	}

	res.render('views/store/show', { product, variant })
}

module.exports = { index, show }