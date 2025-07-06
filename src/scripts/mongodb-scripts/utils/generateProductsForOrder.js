const { faker } = require("@faker-js/faker");

const { createProducts } = require("./createProducts");

const products = createProducts();

const generateProductsForOrder = (amountOfProducts) => {
  const p = [];
  const pMapper = {};
  let totalSpent = 0;

  while (p.length < amountOfProducts) {
    const index = faker.number.int({ min: 0, max: 49 });

    if (!pMapper[index]) {
      const quantity = faker.number.int({ min: 1, max: 10 });
      const product  =products[index];

      p.push({
        ...product,
        quantity,
      });

      totalSpent += parseFloat((product.price * quantity).toFixed(2));
      pMapper[index] = true;
    }
  }

  return { totalSpent, products: p };
}

module.exports = { generateProductsForOrder };
