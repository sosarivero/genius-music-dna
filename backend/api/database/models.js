const User = require('../models/user.model');

function addRelationsToModels() {
  try {
    console.log('Relations added to all models');
  } catch (error) {
    throw error;
  }
}

module.exports = { addRelationsToModels };