const { DataTypes } = require('sequelize');
const { faker } = require('@faker-js/faker');

const sequelize = require('./db');

const User = sequelize.define(
  'users',
  {
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  }
);

(async () => {
  const TOTAL_USERS = 50;

  for (let counter = 0; counter < TOTAL_USERS; counter++) {
    await User.create({
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  }
})();
