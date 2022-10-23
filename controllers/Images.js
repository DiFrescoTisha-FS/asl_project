const { Images, Variants } = require('../models')

const index = async (req, res) => {
	const images = await Images.findAll({
		include: [ Variants ]
	})
	res.render('views/images/index', { images })
}

const form = async (req, res) => {
	const variants = await Variants.findAll()
	if (req.params.id) {
		const image = await Images.findByPk(req.params.id)
		res.render('views/images/edit', { image, variants })
	} else {
		res.render('views/images/create', { variants })
	}
}

const show = async (req, res) => {
	const image = await Images.findByPk(req.params.id)
	const variant = await images.getVariants()
	res.render('views/images/show', { image, variant })
}

const create = async (req, res, next) => {
	const images = await Images.create(req.body)
	// Sets a pretext "imageId" for our upload middleware
	req.imageId = images.id
	// Invoke our upload middleware with next()
	next()
	res.redirect('/images/' + images.id)
}

const update = async (req, res, next) => {
	const image = await Images.update(req.body, {
		where: { id: req.params.id }
	})
	// Sets a pretext "imageId" for our upload middleware
	req.imageId = req.params.id
	// Invoke our upload middleware with next()
	next()
	res.redirect('/images/' + req.params.id)
}

const remove = async (req, res) => {
	const images = await Images.destroy({ where: { id: req.params.id }})
	res.redirect('/images')
}

module.exports = { index, form, show, create, update, remove }

// const { Image } = require('../models')

// const index = async (req, res) => {
//     const images= await Image.findAll()
//     res.render('views/images/index', { images })
//     // res.render('views/index', images)
// }

// const form = async (req, res) => {
//     if (req.params.id) {
//         const image = await Image.findByPk(req.params.id)
//         res.render('views/images/edit', { image })
//     } else {
//         res.render('views/images/create', {})
//     }
// }

// const show = async (req, res) => {
//     const image = await Image.findByPk(req.params.id)
//     res.render('views/images/show', { image })
// }

// const create = async (req, res) => {
//     const image = await Image.create(req.body)
//     res.redirect('/images')
// }

// const update = async (req, res) => {
//     const image = await Image.update(req.body, {
//         where: { id: req.params.id }
//     })
//     res.redirect(`/images/${req.params.id}`)
// }

// const remove = async (req, res) => {
//     const deleted = await Image.destroy({
//         where: { id: req.params.id }
//     })
//     res.redirect('/images')
// }



// module.exports = { index, show, create, remove, form, update }

// const { Image } = require('../models')

// const index = async (req, res) => {
//     const images= await Image.findAll()
//     res.render('views/images/index', { images })
//     // res.render('views/index', images)
// }

// const form = async (req, res) => {
//     if (req.params.id) {
//         const image = await Image.findByPk(req.params.id)
//         res.render('views/images/edit', { image })
//     } else {
//         res.render('views/images/create', {})
//     }
// }

// const show = async (req, res) => {
//     const image = await Image.findByPk(req.params.id)
//     res.render('views/images/show', { image })
// }

// const create = async (req, res) => {
//     const image = await Image.create(req.body)
//     res.redirect('/images')
// }

// const update = async (req, res) => {
//     const image = await Image.update(req.body, {
//         where: { id: req.params.id }
//     })
//     res.redirect(`/images/${req.params.id}`)
// }

// const remove = async (req, res) => {
//     const deleted = await Image.destroy({
//         where: { id: req.params.id }
//     })
//     res.redirect('/images')
// }



// module.exports = { index, show, create, remove, form, update }