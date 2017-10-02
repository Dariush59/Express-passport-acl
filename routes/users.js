var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var is_authenticated = require('../config/possport').is_authenticated;


// creating a user
router.post('/create', userController.create);

// destroying a user by user_id 
router.get('/:user_id/destroy', is_authenticated, userController.destroy);

module.exports = router;