//handles authentication & passes user information to the controller methods
const express = require('express');
// INSERT LATER WITH ACTUAL AUTH const { authenticateUser } = require('../middleware/auth');
const orderController = require('../controllers/orderController');

const router = express.Router();

// Middleware to protect routes that require a logged-in user
// const protect = authenticateUser;

// Route to create a new order
router.post('/', orderController.createOrder);

// Route to get all orders of the logged-in user
router.get('/myorders', protect, orderController.getMyOrders);

// Route to get a single order by ID
router.get('/:id', protect, orderController.getOrderById);

// Route to update an order to paid
router.put('/:id/pay', protect, orderController.updateOrderToPaid);

// Route to update an order to delivered - Admin level function
router.put('/:id/deliver', protect, orderController.updateOrderToDelivered);

// Route to get all orders - Admin level function
// Additional middleware would be needed to verify admin status
router.get('/', protect, orderController.getAllOrders);

module.exports = router;
