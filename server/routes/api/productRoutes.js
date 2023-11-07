//defines endpoints for actions related to proucts
const router = require('express').Router();

const { protect, admin } = require('../middleware/authMiddleware'); // hypothetical middleware for auth

// GET request to get all products
//getAllProducts function handles logic
router.get('/', productController.getAllProducts);

// GET request to get a single product by ID
//getProductById handles logic
router.get('/:id', productController.getProductById);

// POST request to create a new product (Admin only
router.post('/', protect, admin, productController.createProduct);

// PUT request to update a product by ID (Admin only)
router.put('/:id', protect, admin, productController.updateProduct);

// DELETE request to delete a product by ID (Admin only)
router.delete('/:id', protect, admin, productController.deleteProduct);

module.exports = router;