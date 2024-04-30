const User = require('../models/user.model');
const SavedSong = require('../models/savedSong.model');

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(200).send('No user found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({ message: 'User created', user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getProfile(req, res) {
  try {
    const user = await User.findOne({
      where: { email: res.locals.user.email },
    });

    res.status(200).send(res.locals.user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function addSavedSongToUser(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    const savedSong = await SavedSong.findOne({
      where: { id: req.params.songId },
    });

    if (!user || !savedSong) {
      return res.status(404).send(`${!user ? 'User' : 'Song'} not found`);
    }

    savedSong.addUser(user);
    res.status(200).send(`Song ${savedSong.id} saved by User ${user.id}`);
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteSavedSongFromUser(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    const savedSong = await SavedSong.findOne({
      where: { id: req.params.songId },
    });

    if (!user || !savedSong) {
      return res.status(404).send(`${!user ? 'User' : 'Song'} not found`);
    }

    savedSong.removeUser(user);
    res.status(200).send(`Song ${savedSong.id} removed from User ${user.id}'s favourites`);
  } catch (error) {
    console.log(error.message);
  }
}

async function findSongUserRelationship(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    const savedSong = await SavedSong.findOne({
      where: { id: req.params.songId },
    });

    if (!user || !savedSong) {
      return res.status(404).send(false);
    }

    const result = await savedSong.hasUser(user);
    console.log(await result);
    return res.status(200).send(await result);
  } catch (error) {
    console.log(error.message);
  }
}

async function getAllSavedSongs(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    if (!user) {
      return res.status(404).send(`User ${req.params.userId} not found`);
    }
    const result = await user.getFavourites();
    console.log(await result);
    return res.status(200).send(await result);
  } catch (error) {
    console.log(error.message);
  }
}

// Functions related to friendships
async function getFriends(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    if (!user) {
      return res.status(404).send(`User ${req.params.userId} not found`);
    }

    const result = await user.getFriends();
    return res.status(200).send(await result);
  } catch (error) {
    console.log(error.message);
  }
}

async function addFriend(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    const newFriend = await User.findOne({
      where: { id: req.params.friendId },
    });

    if (!user) {
      return res.status(404).send(`User ${req.params.userId} not found`);
    }

    const result = await user.addFriend(newFriend);
    await newFriend.addFriend(user);
    return res.status(200).send(await result);
  } catch (error) {
    console.log(error.message);
  }
}

async function removeFriend(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    const friend = await User.findOne({
      where: { id: req.params.friendId },
    });

    if (!user) {
      return res.status(404).send(`User not found`);
    }

    const result = await user.removeFriend(friend);
    console.log(result);
    return res.status(200).send(`Friend removed`);
  } catch (error) {
    console.log(error.message);
  }
}

async function areFriends(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    const friend = await User.findOne({
      where: { id: req.params.friendId },
    });

    if (!user || !friend) {
      return res.status(404).send(false);
    }

    const result = await user.hasFriend(friend);
    console.log(await result);
    return res.status(200).send(await result);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getOneUser,
  createUser,
  getProfile,
  addSavedSongToUser,
  deleteSavedSongFromUser,
  findSongUserRelationship,
  getAllSavedSongs,
  getFriends,
  addFriend,
  removeFriend,
  areFriends,
};
