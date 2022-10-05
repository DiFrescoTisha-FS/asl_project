let products = [
    {id: "1", "slug": "juice-wrld-shirt", "name": "Juice Wrld Shirt"},
    {id: "2", "slug": "tsbam-hat", "name": "TSBam Hat"},
    {id: "3", "slug": "tsbam-belt", "name": "TSBam Belt"},
    {id: "4", "slug": "tsbam-shoes", "name": "TSBam Shoes"}

]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}

const create = (product) => {
    products.push(product)
    return products
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
}

module.exports = { all, find, update, remove, create }