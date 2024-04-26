const { getSavedSong, createSavedSong, deleteSavedSong } = require('../controllers/savedSong.controller');

const router = require('express').Router();

router.get('/:id', getSavedSong);

router.post('/', createSavedSong);
router.delete('/', deleteSavedSong);

module.exports = router;
