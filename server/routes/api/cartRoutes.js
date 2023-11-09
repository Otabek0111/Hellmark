//defines routes related to shopping cart operations //

const express = require('express');
// UPDATE WITH ACTUAL AUTH const { authenticateUser } = require('../middleware/auth'); 
const cartController = require('../../controllers/cartController');

const router = express.Router();


// Route to get the cart for the logged-in user
router.get('/', cartController.getCart);

// Route to add an item to the cart
router.post('/add', cartController.addItemToCart);

// Route to update an item's quantity in the cart
router.put('/update/:productId', cartController.updateCartItem);

// Route to remove an item from the cart
router.delete('/remove/:productId', cartController.removeItemFromCart);

module.exports = router;
