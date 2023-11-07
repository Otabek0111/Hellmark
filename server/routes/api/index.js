const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const techRoutes = require('./tech-routes.js');

router.use('/user', userRoutes);
router.use('/tech', techRoutes);

module.exports = router;
