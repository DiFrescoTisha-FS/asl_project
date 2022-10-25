// xxxxx-AddVariants.js

'use strict';

// Reusable Description
const description = "TrapStar Bam Merch"

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {

  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'TSBam Black T-Shirt', slug: 'tsbam-blackt-shirt', description, price: 38.99, productId: 1, inventory: 2, createdAt, updatedAt  },
      { id: 2, title: 'TSBam White T-Shirt', slug: 'tsbam-white-t-shirt', description, price: 38.99, productId: 1, inventory: 4, createdAt, updatedAt  },
      { id: 3, title: 'Psychopath CD', slug: 'psychopath-cd', description, price: 29.99, productId: 2, inventory: 0, createdAt, updatedAt  },
      { id: 4, title: 'Simplify CD', slug: 'simplify-cd', description, price: 29.99, productId: 2, inventory: 10, createdAt, updatedAt  }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};
