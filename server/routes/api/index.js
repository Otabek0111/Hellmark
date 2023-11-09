//gathers all routes from api directory & export them as single module
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
// const orderRoutes = require('./orderRoutes');
// const cartRoutes = require('./cartRoutes');

// API routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);
// router.use('/orders', orderRoutes);
// router.use('/cart', cartRoutes);

module.exports = router;
