const { MongoClient } = require('mongodb');

const getConnection = async () => {
  const url = 'mongodb://root:123456@localhost:27017';
  const client = new MongoClient(url);

  await client.connect();

  return client;
}

module.exports = { getConnection };
