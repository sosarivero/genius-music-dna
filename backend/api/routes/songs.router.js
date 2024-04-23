const router = require('express').Router();

const { getSongById, getSearchResults } = require('../controllers/song.controller.js');

router.get('/:id', getSongById);
router.get('/search/:query', getSearchResults);

module.exports = router;
