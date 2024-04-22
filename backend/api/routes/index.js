const router = require('express').Router();

router.use('/songs', require('./songs.router'));

module.exports = router;
