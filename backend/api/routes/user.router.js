const { getOneUser, createUser, getProfile } = require('../controllers/user.controller.js');
const { checkAuth } = require('../controllers/middleware/');

const router = require('express').Router();

router.get('/profile', checkAuth, getProfile);

router.get('/:id', checkAuth, getOneUser);
router.post('/', createUser);

module.exports = router;
