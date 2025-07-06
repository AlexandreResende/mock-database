const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');

const { getConnection } = require('./db');
const { generateOrdersForUser } = require('./utils/generateOrdersForUser');

(async () => {
  const client = await getConnection();
  const collection = client.db().collection('users');

  const amountOfUsers = 150;

  for (let count = 0; count < amountOfUsers; count++) {
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
  }

  return;
})();

return;
