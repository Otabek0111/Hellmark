// defines routes for user-related operations (signuping new user, logging in, user profile operations(?))
const router = require('express').Router();
const userController = require('../../controllers/userController');
// const { protect } = require('../middleware/auth');

// POST request for user registration
router.post('/signup', userController.signup);

// POST request for user login
router.post('/login', userController.login);

router.post('/logout', userController.logout);

// GET request for user profile, this should be protected so only the profile owner can access it
router.get('/:email', userController.getUserProfile);

module.exports = router;