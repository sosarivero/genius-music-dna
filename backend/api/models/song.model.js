const { sequelize } = require('../database/index');
const { DataTypes } = require('sequelize');

const Song = sequelize.define(
  'song',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    artist_names: {
      type: DataTypes.STRING,
    },
    release_date_for_display: {
      type: DataTypes.STRING,
    },
    producer_artists: {
      type: DataTypes.STRING,
    },
    media: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  },
);

module.exports = Song;
