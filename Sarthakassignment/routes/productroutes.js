const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller');

router.post('/add', productController.addProduct);
router.post('/apply-discount', productController.applyDiscount);

module.exports = router;
