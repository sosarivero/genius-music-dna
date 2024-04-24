const router = require('express').Router();

router.use('/user', require('./user.router'));
router.use('/songs', require('./songs.router'));

module.exports = router;
