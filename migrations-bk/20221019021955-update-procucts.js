'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * ('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Products', {
      price: {
        type: Sequelize.FLOAT
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * ;
     */
     await queryInterface.changeColumn('Products', {
      price: {
        type: Sequelize.INTEGER
      }
    })
  }
};
