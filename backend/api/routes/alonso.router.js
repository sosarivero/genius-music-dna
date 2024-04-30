const { getAlonsoAvatar } = require('../controllers/alonso.controller');

const router = require('express').Router();

router.get('/:alonsoId', getAlonsoAvatar);

module.exports = router;
