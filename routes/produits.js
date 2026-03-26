const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

router.get('/', produitController.getAll);
router.get('/:id', produitController.getOne);

module.exports = router;