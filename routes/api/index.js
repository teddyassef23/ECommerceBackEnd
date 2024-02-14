const router = require('express').Router();
const catagoryRoutes = require('./catagoryRoutes');
const prodactRoutes = require('./prodactRoutes');
const tagRoutes = require('./tagRoutes');


router.use('/catagoryRoutes', catagoryRoutes);
router.use('/prodactRoutes', prodactRoutes);
router.use('/tagRoutes', tagRoutes);

module.exports = router;
