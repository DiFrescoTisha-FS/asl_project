'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.FLOAT,
      defaultValue: 0.00,
      allowNull: false 
    })
    await queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.TEXT('long'),
      defaultValue: 0.00,
      allowNull: false 
    })


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.STRING,
      defaultValue: 0,
      allowNull: false 
    })
     await queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.STRING,
      defaultValue: 0,
      allowNull: false 
    })
  }

};
