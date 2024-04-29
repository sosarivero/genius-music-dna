const User = require('../models/user.model');
const SavedSong = require('../models/savedSong.model');

function addRelationsToModels() {
  try {
    User.belongsToMany(SavedSong, {
      as: { singular: 'favourite', plural: 'favourites' },
      through: 'Users_Saved_Songs',
    });
    SavedSong.belongsToMany(User, { through: 'Users_Saved_Songs' });
    console.log('Relations added to all models');
  } catch (error) {
    throw error;
  }
}

module.exports = { addRelationsToModels };
