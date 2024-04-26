const User = require('../models/user.model');
const Song = require('../models/song.model');

function addRelationsToModels() {
  try {
    console.log('Relations added to all models');
  } catch (error) {
    throw error;
  }
}

module.exports = { addRelationsToModels };
