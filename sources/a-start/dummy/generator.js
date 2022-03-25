const fs = require("fs/promises");
const { faker } = require("@faker-js/faker");
const DATA_AMOUNT = 3;

// IIFE
(async () => {
  const result = [];

  for (let i = 0; i < DATA_AMOUNT; i++) {
    const objCompany = {};
    objCompany.name = faker.company.companyName();
    objCompany.address = faker.address.streetAddress();
    objCompany.zipCode = faker.address.zipCode();

    result.push(objCompany);
  }

  await fs.writeFile("./company.json", JSON.stringify(result, null, 2), "utf8");
})();
