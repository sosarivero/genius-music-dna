const { sequelize } = require('../database/index');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'user',
  {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    underscored: true,
  },
);

module.exports = User;
