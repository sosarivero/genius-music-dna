const {
  getOneUser,
  createUser,
  getProfile,
  addSavedSongToUser,
  deleteSavedSongFromUser,
} = require('../controllers/user.controller.js');

const { checkAuth } = require('../controllers/middleware/');

const router = require('express').Router();

router.get('/profile', checkAuth, getProfile);

router.get('/:id', getOneUser);
router.post('/', createUser);
router.post('/:userId/addSong/:songId', addSavedSongToUser);
router.delete('/:userId/removeSong/:songId', deleteSavedSongFromUser);

module.exports = router;
