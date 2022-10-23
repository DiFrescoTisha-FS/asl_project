// xxxxx-AddProduct.js
'use strict';
// Reusable Description
const description = `Welcome to "TrapStar Bam Beats Music Stop"!`
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Product', [
      { 
        id: 1, 
        title: 'TrapStar Bam CD "Right Now"', 
        slug: 'tsbam-cd-right-now', 
        price: 27.88, 
        is_published: true,
        description, createdAt, updatedAt
      },

      { 
        id: 2, 
        title: 'TrapStar Bam CD "Right Now"', 
        slug: 'tsbam-cd-right-now', 
        price: 27.88, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 3, 
        title: 'TrapStar Bam CD ""', 
        slug: 'tsbam-cd-right-now', 
        price: 27.88, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 4, 
        title: 'TrapStar Bam Mens Shirt', 
        slug: 'tsbam-mens-shirt', 
        price: 39.99, 
        is_published: true,
        description, createdAt, updatedAt
      },
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Product', null, {})
  }
};

