const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
const { getProducts, getProduct, deleteProduct, updateProduct, createProduct } = require('../controllers/product.controller.js');

router.get('/', getProducts);

router.get('/:id', getProduct);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

router.post('/', createProduct);

module.exports = router;