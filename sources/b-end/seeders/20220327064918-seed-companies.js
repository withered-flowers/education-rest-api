"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Membaca file
    // equivalen dengan
    // require('fs').readFileSync('../dummy/company.json', 'utf8');
    const companies = require("../dummy/company.json");

    companies.forEach((company) => {
      // Karena datanya belum ada createdAt dan updatedAt untuk
      // keperluan sequelize, maka ditambahkan di sini
      company.createdAt = new Date();
      company.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Companies", companies, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {});
  },
};
