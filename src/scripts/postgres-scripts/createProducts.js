const { DatTypes, DataTypes } = require('sequelize');
const { faker } = require('@faker-js/faker'); 

const sequelize = require('./db');

const Products = sequelize.define('products', {
  name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
});

(async () => {
  const TOTAL_PRODUCTS = 100;

  for (let counter = 0; counter < TOTAL_PRODUCTS; counter++) {
    await Products.create({
      name: faker.commerce.product(),
      description: faker.lorem.text().substring(0, 150), // max string size for description is 150
      price: faker.commerce.price(),
    });
  }
})();
