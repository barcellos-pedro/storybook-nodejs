const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get('/', indexController.login);
router.get('/dashboard', indexController.dashboard);

module.exports = router;