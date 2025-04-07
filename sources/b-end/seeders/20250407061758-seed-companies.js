"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Membaca file, equivalen denvan
		// require('node:fs').readFileSync('../dummy/company.json', 'utf8');
		const companies = require("../dummy/company.json");

		// Mengubah data yang dibaca dari file
		// Biasanya pakai map atau pakai forEach kan?
		// Mari di sini kita akan menggunakan for .. of ..
		for (const company of companies) {
			company.createdAt = new Date();
			company.updatedAt = new Date();
		}

		await queryInterface.bulkInsert("Companies", companies, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Companies", null, {});
	},
};
