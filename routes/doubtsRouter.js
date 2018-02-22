var express = require('express');
var router = express.Router();
var doubtsController = require('../controllers/doubtsController.js');

// Doubts list routes
router.get('/', doubtsController.list);

// Create Doubt routes
router.get('/create', doubtsController.create);
router.post('/create', doubtsController.doCreate);

// Delete Doubt
// HTTP: get, post, put, delete
// HTML: get, post
router.get('/delete/:id', doubtsController.delete);

module.exports = router;
