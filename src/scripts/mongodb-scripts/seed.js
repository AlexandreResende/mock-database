const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');

const { getConnection } = require('./db');

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

const generateOrdersForUser = (amountOfOrders, recordCreated) => {
  const orders = [];

  while (orders.length < amountOfOrders) {
    const totalProducts = faker.number.int({ min: 1, max: 10 });

    const { totalSpent, products } = generateProductsForOrder(totalProducts);

    orders.push({
      id :uuidv4(),
      amount: parseFloat(totalSpent.toFixed(2)),
      createdAt: faker.date.between({ from: recordCreated, to: new Date() }),
      products,
    });
  }

  return orders;
}


(async () => {
  const client = await getConnection();
  const collection = client.db().collection('users');
  let userId = uuidv4();
  const createdAt = faker.date.past();
  const amountOfOrders = faker.number.int({ min: 1, max: 5 });

  const data = {
    _id: userId,
    username: faker.internet.username(),
    email: faker.internet.email(),
    createdAt,
    updatedAt: faker.date.between({ from: createdAt, to: new Date() }),
    orders: generateOrdersForUser(amountOfOrders, createdAt),
  };

  await collection.insertOne(data);

  return;
})();

return;
