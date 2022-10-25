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
     await queryInterface.addColumn('Variant', { id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  } 
});

await queryInterface.changeColumn('Variant', 'price', {
  type: Sequelize.FLOAT,
  defaultValue: 0.00,
  allowNull: false 
})
await queryInterface.changeColumn('Variant', 'description', {
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
     * 
     */
    await queryInterface.removeColumn('Variant', { id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    } 
  });

await queryInterface.changeColumn('Vairant', 'price', {
  type: Sequelize.FLOAT,
  defaultValue: 0.00,
  allowNull: false 
})
await queryInterface.changeColumn('Variant', 'description', {
  type: Sequelize.STRING,
  defaultValue: 0.00,
  allowNull: false 
})

}
};
