var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController.js');

router.get('/', indexController.index);
router.get('/contact', indexController.contact);

module.exports = router;
