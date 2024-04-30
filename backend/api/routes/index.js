const router = require('express').Router();

router.use('/user', require('./user.router'));
router.use('/songs', require('./songs.router'));
router.use('/auth', require('./auth.router'));
router.use('/saved', require('./savedSongs.router'));
router.use('/alonso', require('./alonso.router'));

module.exports = router;
