const express = require('express')
const router = express.Router()

// controllers
const babuAdd = require('../controllers/babuAdd');
const babuRedirect = require('../controllers/babuRedirect');

router.get('/:short_id', babuRedirect.get);
router.post('/add', babuAdd.post);

module.exports = router;