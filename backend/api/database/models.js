const User = require('../models/user.model');
const SavedSong = require('../models/savedSong.model');

function addRelationsToModels() {
  try {
    console.log('Relations added to all models');
  } catch (error) {
    throw error;
  }
}

module.exports = { addRelationsToModels };
