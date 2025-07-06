const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');

const { generateProductsForOrder } = require("./generateProductsForOrder");

const generateOrdersForUser = (amountOfOrders, recordCreated) => {
  const orders = [];

  while (orders.length < amountOfOrders) {
    const totalProducts = faker.number.int({ min: 1, max: 10 });

    const { totalSpent, products } = generateProductsForOrder(totalProducts);

    orders.push({
      id : uuidv4(),
      amount: parseFloat(totalSpent.toFixed(2)),
      createdAt: faker.date.between({ from: recordCreated, to: new Date() }),
      products,
    });
  }

  return orders;
}

module.exports = { generateOrdersForUser };
