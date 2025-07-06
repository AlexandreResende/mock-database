const { v4: uuidv4 } = require('uuid');

const { faker } = require("@faker-js/faker");

const createProducts = () => {
  const products = [];

  for (let counter = 0; counter < 50; counter++) {
    const price = parseFloat(faker.commerce.price());
  
    products.push({
      id: uuidv4(),
      name: `${faker.commerce.product()} ${faker.commerce.product()}`,
      description: faker.lorem.words(),
      price,
    });
  }

  return products;
};

module.exports = { createProducts };
