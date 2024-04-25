const { getOneUser, createUser } = require('../controllers/user.controller.js');
const { checkAuth } = require('../controllers/middleware/');

const router = require('express').Router();

router.get('/:id', checkAuth, getOneUser);
router.post('/', createUser);

module.exports = router;
