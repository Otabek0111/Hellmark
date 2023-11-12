const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

// Route to create a new product
router.post('/', productController.createProduct);

// Route to get all products
router.get('/', productController.getAllProducts);

// Route to get a single product by ID
router.get('/:title', productController.getProductByTitle);

// Route to update a product by ID
// router.put('/:title', productController.updateProduct);

// Route to delete a product by ID
// router.delete('/:title', productController.deleteProduct);

module.exports = router;
