'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("DbCars", [
      {
        modelo: "718 Cayman GTS",
        marca: "Porsche",
        cor: "azul",
        preco: 417000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  
    async down (queryInterface, Sequelize) {
      queryInterface.bulkDelete("DbCars", null, {});
    },
  };