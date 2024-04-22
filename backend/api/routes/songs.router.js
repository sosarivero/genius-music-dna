const router = require('express').Router();

const { getSongById } = require('../controllers/song.controller.js');

router.get('/:id', getSongById);

module.exports = router;
