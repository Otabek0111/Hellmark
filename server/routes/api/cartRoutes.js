//defines routes related to shopping cart operations

const express = require('express');
const { authenticateUser } = require('../middleware/authMiddleware'); // Replace with authentication middleware
const cartController = require('../controllers/cartController');

const router = express.Router();

// Middleware to protect routes that require a logged-in user
const protect = authenticateUser;

// Route to get the cart for the logged-in user
router.get('/', protect, cartController.getCart);

// Route to add an item to the cart
router.post('/add', protect, cartController.addItemToCart);

// Route to update an item's quantity in the cart
router.put('/update/:productId', protect, cartController.updateCartItem);

// Route to remove an item from the cart
router.delete('/remove/:productId', protect, cartController.removeItemFromCart);

module.exports = router;
