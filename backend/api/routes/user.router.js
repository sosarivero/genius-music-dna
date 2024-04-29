const {
  getOneUser,
  createUser,
  getProfile,
  addSavedSongToUser,
  deleteSavedSongFromUser,
  findSongUserRelationship,
  getAllSavedSongs,
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

module.exports = router;
