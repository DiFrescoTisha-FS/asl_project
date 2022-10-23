// xxxxx-AddVariants.js
'use strict';
// Reusable Description
const description = `Welcome to "TrapStar Bam Beats Music Stop"`
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'Gray', slug: 'gray', description, price: 68.99, productId: 1, inventory: 2, createdAt, updatedAt  },
      { id: 2, title: 'White', slug: 'white', description, price: 68.99, productId: 1, inventory: 24, createdAt, updatedAt  },
      { id: 3, title: 'Purple', slug: 'purple', description, price: 68.99, productId: 2, inventory: 0, createdAt, updatedAt  },
      { id: 4, title: 'Pink', slug: 'pink', description, price: 89.78, productId: 2, inventory: 10, createdAt, updatedAt  }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
}