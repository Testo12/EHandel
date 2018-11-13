var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/controller');
router.post('/create', product_controller.create);
router.get('/:id', product_controller.details);
router.put('/:id/update', product_controller.update);
router.delete('/:id/delete', product_controller.delete )
module.exports = router;

