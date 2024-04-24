const { getOneUser, createUser } = require('../controllers/user.controller.js');

const router = require('express').Router();

router.get('/:id', getOneUser);
router.post('/', createUser);

module.exports = router;
