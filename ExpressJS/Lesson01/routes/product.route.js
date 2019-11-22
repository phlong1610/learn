const express = require('express');
const controller = require('../controllers/product.controller');
const router = express.Router();
const validate = require('../validate/product.validate');
router.get('/', controller.index);
router.get('/cookie', (req, res, next) => {
    res.cookie('product-id',12345);
    res.send('Hello');
})
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.detail);
router.post('/create', validate.postCreate,controller.postCreate);
module.exports = router;