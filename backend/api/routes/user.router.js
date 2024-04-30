const {
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
} = require('../controllers/user.controller.js');

const { checkAuth } = require('../controllers/middleware/');

const router = require('express').Router();

router.get('/profile', checkAuth, getProfile);

router.get('/:id', getOneUser);
router.post('/', createUser);

router.get('/:userId/song/:songId', findSongUserRelationship);
router.post('/:userId/addSong/:songId', addSavedSongToUser);
router.delete('/:userId/removeSong/:songId', deleteSavedSongFromUser);

router.get('/:userId/favs', getAllSavedSongs);

router.get('/:userId/friends', getFriends);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;
