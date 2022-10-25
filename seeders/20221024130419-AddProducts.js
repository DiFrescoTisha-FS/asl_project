// xxxxx-AddProducts.js

'use strict';

// Reusable Description
const description = "TrapStar Bam Merch"

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {

  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'TSBam T-shirt', 
        slug: 'tsbam-t-shirt', 
        price: 38.99, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'TSBam CD Psychopath', 
        slug: 'tsbam-cd-psychopath', 
        price: 29.99, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};

