// defines routes for user-related operations (registering new user, logging in, user profile operations(?))
const router = require('express').Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// POST request for user registration
router.post('/register', userController.register);

// POST request for user login
router.post('/login', userController.login);

// GET request for user profile, this should be protected so only the profile owner can access it
router.get('/profile', protect, userController.getUserProfile);

// PUT request to update user profile, also protected
router.put('/profile', protect, userController.updateUserProfile);

module.exports = router;